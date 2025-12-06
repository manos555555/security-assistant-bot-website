"""Validate translations.js syntax"""
import subprocess
import sys

# Use Node.js to validate if available, otherwise just check structure
result = subprocess.run(
    ['node', '-e', 'require("./translations.js"); console.log("OK")'],
    capture_output=True,
    text=True,
    cwd='.'
)

if result.returncode == 0:
    print("✅ JavaScript syntax is valid!")
    print(result.stdout)
else:
    print("❌ JavaScript syntax error:")
    print(result.stderr)
