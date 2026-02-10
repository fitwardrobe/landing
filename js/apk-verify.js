/**
 * FitWardrobe APK Integrity Verifier
 * Implements FW-C02 Security Fix
 * Verifies SHA-256 hash of APK before installation
 */

const APK_CONFIG = {
    version: '1.0.1',
    size: '9.7 MB',
    sha256: 'da9211314389cf51194a4a02261f40c1d6f4d60f2eb0d8efce523b2e660',
    url: 'https://fitwardrobe.vercel.app/download/fitwardrobe-v1.0.1-20260208.apk'
};

/**
 * Verifies a blob against a SHA-256 hash
 */
async function verifyHash(blob, expectedHash) {
    const arrayBuffer = await blob.arrayBuffer();
    const hashBuffer = await crypto.subtle.digest('SHA-256', arrayBuffer);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    const actualHash = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
    return actualHash === expectedHash;
}

/**
 * Handles the download and verification process
 */
async function triggerSecureDownload() {
    // 1. Create/Show Modal
    const modal = document.createElement('div');
    modal.id = 'verify-modal';
    modal.className = 'apk-modal-overlay';
    modal.innerHTML = `
        <div class="apk-modal">
            <h3>🔒 Security Verification</h3>
            <p>Initializing secure download for FitWardrobe v${APK_CONFIG.version}...</p>
            <div class="progress-container">
                <div id="verify-progress" class="progress-bar"></div>
            </div>
            <p id="verify-status" class="status-text">Connecting to server...</p>
            <div id="verify-actions" class="modal-actions" style="display:none">
                <button id="close-verify" class="btn btn-outline">Close</button>
            </div>
        </div>
    `;
    document.body.appendChild(modal);
    
    // Add styles for modal if not present
    if (!document.getElementById('apk-verify-styles')) {
        const style = document.createElement('style');
        style.id = 'apk-verify-styles';
        style.textContent = `
            .apk-modal-overlay {
                position: fixed;
                top: 0; left: 0; right: 0; bottom: 0;
                background: rgba(0,0,0,0.7);
                display: flex; align-items: center; justify-content: center;
                z-index: 3000;
                backdrop-filter: blur(4px);
            }
            .apk-modal {
                background: white;
                padding: 2rem;
                border-radius: 16px;
                max-width: 400px;
                width: 90%;
                text-align: center;
                box-shadow: 0 20px 50px rgba(0,0,0,0.3);
            }
            .progress-container {
                height: 8px;
                background: #eee;
                border-radius: 4px;
                margin: 1.5rem 0;
                overflow: hidden;
            }
            .progress-bar {
                height: 100%;
                width: 0%;
                background: var(--color-primary, #1E2329);
                transition: width 0.3s ease;
            }
            .status-text {
                font-size: 0.9rem;
                color: #666;
            }
            .modal-actions {
                margin-top: 1.5rem;
                display: flex;
                gap: 0.5rem;
                justify-content: center;
            }
            .status-success { color: #28a745; font-weight: 600; }
            .status-error { color: #dc3545; font-weight: 600; }
        `;
        document.head.appendChild(style);
    }

    const statusEl = document.getElementById('verify-status');
    const progressEl = document.getElementById('verify-progress');
    const actionsEl = document.getElementById('verify-actions');
    const closeBtn = document.getElementById('close-verify');

    closeBtn.onclick = () => {
        document.body.removeChild(modal);
    };

    try {
        // 2. Fetch with progress
        statusEl.textContent = 'Downloading APK file...';
        const response = await fetch(APK_CONFIG.url);
        
        if (!response.ok) throw new Error('Download failed');

        const reader = response.body.getReader();
        const contentLength = +response.headers.get('Content-Length') || (6.2 * 1024 * 1024);
        
        let receivedLength = 0;
        let chunks = [];
        
        while(true) {
            const {done, value} = await reader.read();
            if (done) break;
            chunks.push(value);
            receivedLength += value.length;
            const progress = (receivedLength / contentLength) * 100;
            progressEl.style.width = Math.min(progress, 100) + '%';
        }

        const blob = new Blob(chunks);
        
        // 3. Verify
        statusEl.textContent = 'Verifying cryptographic signature...';
        const isValid = await verifyHash(blob, APK_CONFIG.sha256);

        if (isValid) {
            statusEl.className = 'status-text status-success';
            statusEl.textContent = '✓ Integrity Verified. Secure to install.';
            
            // 4. Trigger Save
            const downloadUrl = URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = downloadUrl;
            a.download = `fitwardrobe-v${APK_CONFIG.version}-verified.apk`;
            document.body.appendChild(a);
            a.click();
            URL.revokeObjectURL(downloadUrl);
            
            setTimeout(() => {
                if (modal.parentNode) document.body.removeChild(modal);
            }, 2000);
        } else {
            statusEl.className = 'status-text status-error';
            statusEl.innerHTML = '⚠️ Security Alert: Hash Mismatch!<br>The file may have been tampered with.';
            actionsEl.style.display = 'flex';
        }

    } catch (err) {
        statusEl.className = 'status-text status-error';
        statusEl.textContent = 'Error: ' + err.message;
        actionsEl.style.display = 'flex';
    }
}

// Hook into download buttons
document.addEventListener('DOMContentLoaded', () => {
    const downloadBtns = document.querySelectorAll('a[download]');
    downloadBtns.forEach(btn => {
        if (btn.href.endsWith('.apk')) {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                triggerSecureDownload();
            });
        }
    });
});
