#!/usr/bin/env python3
"""
Script to add data-i18n attributes to the remaining HTML elements
Run this to complete the i18n setup for the website
"""

import re

# Read the HTML file
with open('index.html', 'r', encoding='utf-8') as f:
    html = f.read()

# Define replacements (pattern, replacement)
replacements = [
    # Story System
    (r'<div class="feature-badge">🔥 Unique</div>',
     r'<div class="feature-badge" data-i18n="features.story.badge">🔥 Unique</div>'),
    (r'<h3>Interactive Story System</h3>',
     r'<h3 data-i18n="features.story.title">Interactive Story System</h3>'),
    
    # Commands Section
    (r'<h2>Popular Commands</h2>',
     r'<h2 data-i18n="commands.title">Popular Commands</h2>'),
    (r'<p>Just a few of the 50\+ commands available</p>',
     r'<p data-i18n="commands.subtitle">Just a few of the 50+ commands available</p>'),
    
    # Pricing Section
    (r'<h2>Simple Pricing</h2>',
     r'<h2 data-i18n="pricing.title">Simple Pricing</h2>'),
    (r'<p>Choose the plan that fits your community</p>',
     r'<p data-i18n="pricing.subtitle">Choose the plan that fits your community</p>'),
    
    # Support Section
    (r'<h2>Need Help\?</h2>',
     r'<h2 data-i18n="support.title">Need Help?</h2>'),
    (r'<p>Join our support server for assistance, updates, and community</p>',
     r'<p data-i18n="support.subtitle">Join our support server for assistance, updates, and community</p>'),
    
    # Footer
    (r'<p>The ultimate Discord bot for your community</p>',
     r'<p data-i18n="footer.tagline">The ultimate Discord bot for your community</p>'),
    (r'<h4>Quick Links</h4>',
     r'<h4 data-i18n="footer.quickLinks">Quick Links</h4>'),
    (r'<h4>Legal</h4>',
     r'<h4 data-i18n="footer.legal">Legal</h4>'),
    (r'<h4>Connect</h4>',
     r'<h4 data-i18n="footer.connect">Connect</h4>'),
]

# Apply replacements
for pattern, replacement in replacements:
    html = re.sub(pattern, replacement, html)

# Write back
with open('index.html', 'w', encoding='utf-8') as f:
    f.write(html)

print("[OK] Successfully added i18n attributes to index.html")
print("[OK] Website is now multilingual!")
print("\nNext steps:")
print("1. Open index.html in a browser")
print("2. Click the language buttons to test switching")
print("3. Check that all text changes correctly")
