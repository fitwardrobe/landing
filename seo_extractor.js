const fs = require('fs');
const path = require('path');

const rootDir = __dirname;
const filesToCheck = ['index.html', 'capsule-wardrobe.html', 'outfit-planner.html', 'minimalist-wardrobe.html'];
const blogDir = path.join(rootDir, 'blog');

function extractTag(content, regex) {
    const match = content.match(regex);
    const capture = match ? (match[1] ?? match[2] ?? match[3] ?? null) : null;
    return capture !== null ? capture.trim().replace(/\s+/g, ' ') : null;
}

function analyzeFile(filePath) {
    if (!fs.existsSync(filePath)) return { error: 'MISSING' };
    const content = fs.readFileSync(filePath, 'utf8');
    
    return {
        metaDesc: extractTag(content, /<meta[^>]*name="description"[^>]*content="([^"]*)"[\s\S]*?>/i) || extractTag(content, /<meta[^>]*content="([^"]*)"[^>]*name="description"[\s\S]*?>/i),
        title: extractTag(content, /<title>([\s\S]*?)<\/title>/i),
        h1: extractTag(content, /<h1[^>]*>([\s\S]*?)<\/h1>/i),
        canonical: extractTag(content, /<link[^>]*rel="canonical"[^>]*href="([^"]*)"/i)
    };
}

const report = {};

for (const file of filesToCheck) {
    report[file] = analyzeFile(path.join(rootDir, file));
}

report['blog'] = {};
if (fs.existsSync(blogDir)) {
    const blogFiles = fs.readdirSync(blogDir).filter(f => f.endsWith('.html'));
    for (const file of blogFiles) {
        report['blog'][file] = analyzeFile(path.join(blogDir, file));
    }
}

const indexContent = fs.readFileSync(path.join(rootDir, 'index.html'), 'utf8');

report['index_og'] = {
    ogTitle: extractTag(indexContent, /<meta property="og:title" content="([^"]*)"/i),
    ogDesc: extractTag(indexContent, /<meta property="og:description" content="([^"]*)"/i),
    ogImage: extractTag(indexContent, /<meta property="og:image" content="([^"]*)"/i),
    ogType: extractTag(indexContent, /<meta property="og:type" content="([^"]*)"/i),
    twitterCard: extractTag(indexContent, /<meta name="twitter:card" content="([^"]*)"/i),
    twitterTitle: extractTag(indexContent, /<meta name="twitter:title" content="([^"]*)"/i),
    twitterDesc: extractTag(indexContent, /<meta name="twitter:description" content="([^"]*)"/i)
};

// Check structured data
const schemas = indexContent.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/gi) || [];
report['schemas'] = schemas.map(s => {
    try {
        const jsonStr = s.replace(/<script[^>]*>|<\/script>/gi, '');
        return JSON.parse(jsonStr);
    } catch(e) { return { error: 'Invalid JSON' }; }
});

// Brand variations
report['brandVariations'] = {
    'fit your wardrobe': !!indexContent.match(/fit your wardrobe/i),
    'fit wardrobe': !!indexContent.match(/fit wardrobe/i)
};
const fitWardrobeMatches = indexContent.match(/.{0,50}fit wardrobe.{0,50}/gi) || [];
report['brandVariationContexts'] = fitWardrobeMatches.slice(0, 5);
const fitYourWardrobeMatches = indexContent.match(/.{0,50}fit your wardrobe.{0,50}/gi) || [];
report['brandVariationContexts'].push(...fitYourWardrobeMatches.slice(0, 5));


// sitemap and robots
report['sitemap'] = fs.existsSync(path.join(rootDir, 'sitemap.xml')) ? 'EXISTS' : 'MISSING';
if(report['sitemap'] !== 'MISSING') {
    const sitemapContent = fs.readFileSync(path.join(rootDir, 'sitemap.xml'), 'utf8');
    report['sitemap_count'] = (sitemapContent.match(/<url>/g) || []).length;
    report['sitemap_content'] = sitemapContent;
}

report['robots'] = fs.existsSync(path.join(rootDir, 'robots.txt')) ? fs.readFileSync(path.join(rootDir, 'robots.txt'), 'utf8') : 'MISSING';

fs.writeFileSync(path.join(rootDir, 'seo_report_raw.json'), JSON.stringify(report, null, 2));
console.log('Report generated at seo_report_raw.json');
