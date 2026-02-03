/**
 * Mobile Navigation Handler
 * FitWardrobe - Professional Implementation
 */

(function() {
  'use strict';
  
  // Wait for DOM to load
  document.addEventListener('DOMContentLoaded', initMobileNav);
  
  function initMobileNav() {
    const menuToggle = document.querySelector('.mobile-menu-toggle');
    const mobileNav = document.getElementById('mobileNav');
    
    // Exit if elements don't exist
    if (!menuToggle || !mobileNav) {
      console.warn('Mobile navigation elements not found');
      return;
    }
    
    // Toggle menu on button click
    menuToggle.addEventListener('click', toggleMenu);
    
    // Close menu when clicking navigation links
    const navLinks = mobileNav.querySelectorAll('a');
    navLinks.forEach(link => {
      link.addEventListener('click', closeMenu);
    });
    
    // Close menu on Escape key
    document.addEventListener('keydown', handleEscape);
    
    // Close menu when clicking outside
    document.addEventListener('click', handleOutsideClick);
    
    // Prevent scroll when menu is open
    function toggleMenu(e) {
      e.stopPropagation();
      const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true';
      
      if (isExpanded) {
        closeMenu();
      } else {
        openMenu();
      }
    }
    
    function openMenu() {
      menuToggle.setAttribute('aria-expanded', 'true');
      mobileNav.hidden = false;
      mobileNav.setAttribute('aria-hidden', 'false');
      document.body.classList.add('menu-open');
      
      // Trap focus in menu
      trapFocus(mobileNav);
    }
    
    function closeMenu() {
      menuToggle.setAttribute('aria-expanded', 'false');
      mobileNav.hidden = true;
      mobileNav.setAttribute('aria-hidden', 'true');
      document.body.classList.remove('menu-open');
      
      // Return focus to toggle button
      menuToggle.focus();
    }
    
    function handleEscape(e) {
      if (e.key === 'Escape' && !mobileNav.hidden) {
        closeMenu();
      }
    }
    
    function handleOutsideClick(e) {
      if (!mobileNav.hidden && 
          !mobileNav.contains(e.target) && 
          !menuToggle.contains(e.target)) {
        closeMenu();
      }
    }
    
    // Focus trap for accessibility
    function trapFocus(element) {
      const focusableElements = element.querySelectorAll(
        'a[href], button, textarea, input, select, [tabindex]:not([tabindex="-1"])'
      );
      
      if (focusableElements.length === 0) return;
      
      const firstFocusable = focusableElements[0];
      const lastFocusable = focusableElements[focusableElements.length - 1];
      
      firstFocusable.focus();
      
      element.addEventListener('keydown', function(e) {
        if (e.key !== 'Tab') return;
        
        if (e.shiftKey) {
          if (document.activeElement === firstFocusable) {
            lastFocusable.focus();
            e.preventDefault();
          }
        } else {
          if (document.activeElement === lastFocusable) {
            firstFocusable.focus();
            e.preventDefault();
          }
        }
      });
    }
  }
  
  // Handle window resize - close menu if viewport becomes desktop size
  let resizeTimer;
  window.addEventListener('resize', function() {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(function() {
      if (window.innerWidth >= 768) {
        const mobileNav = document.getElementById('mobileNav');
        const menuToggle = document.querySelector('.mobile-menu-toggle');
        if (mobileNav && !mobileNav.hidden) {
          menuToggle.setAttribute('aria-expanded', 'false');
          mobileNav.hidden = true;
          document.body.classList.remove('menu-open');
        }
      }
    }, 250);
  });
  
})();
