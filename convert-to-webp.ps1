# Image Optimization Script
# This script helps convert your images to WebP format for better performance

Write-Host "==================================" -ForegroundColor Cyan
Write-Host "Image to WebP Converter" -ForegroundColor Cyan
Write-Host "==================================" -ForegroundColor Cyan
Write-Host ""

# Check if cwebp is available
try {
    $cwebpVersion = & cwebp -version 2>&1
    Write-Host "✓ WebP converter found" -ForegroundColor Green
} catch {
    Write-Host "✗ WebP converter not found!" -ForegroundColor Red
    Write-Host ""
    Write-Host "Please download cwebp from:" -ForegroundColor Yellow
    Write-Host "https://developers.google.com/speed/webp/download" -ForegroundColor Yellow
    Write-Host ""
    Write-Host "Installation steps:" -ForegroundColor Yellow
    Write-Host "1. Download the Windows version" -ForegroundColor White
    Write-Host "2. Extract the files" -ForegroundColor White
    Write-Host "3. Add the bin folder to your PATH or place cwebp.exe in this directory" -ForegroundColor White
    exit
}

Write-Host ""

# Configuration
$sourceDir = "public\images"
$quality = 80
$stats = @{
    Converted = 0
    Skipped = 0
    Failed = 0
    OriginalSize = 0
    NewSize = 0
}

# Check if source directory exists
if (!(Test-Path $sourceDir)) {
    Write-Host "✗ Directory '$sourceDir' not found!" -ForegroundColor Red
    exit
}

Write-Host "Scanning for images in: $sourceDir" -ForegroundColor Cyan
Write-Host "Quality setting: $quality" -ForegroundColor Cyan
Write-Host ""

# Find all image files
$imageFiles = Get-ChildItem -Path $sourceDir -Include *.jpg,*.jpeg,*.png,*.JPG,*.JPEG,*.PNG -Recurse

if ($imageFiles.Count -eq 0) {
    Write-Host "No images found!" -ForegroundColor Yellow
    exit
}

Write-Host "Found $($imageFiles.Count) images to process" -ForegroundColor Green
Write-Host ""
Write-Host "Press any key to start conversion..." -ForegroundColor Yellow
$null = $Host.UI.RawUI.ReadKey("NoEcho,IncludeKeyDown")
Write-Host ""

# Process each image
foreach ($file in $imageFiles) {
    $webpPath = $file.FullName -replace '\.(jpg|jpeg|png|JPG|JPEG|PNG)$', '.webp'
    
    # Skip if WebP already exists and is newer
    if ((Test-Path $webpPath) -and ((Get-Item $webpPath).LastWriteTime -gt $file.LastWriteTime)) {
        Write-Host "⊘ Skipped (up to date): $($file.Name)" -ForegroundColor Gray
        $stats.Skipped++
        continue
    }
    
    try {
        $originalSize = (Get-Item $file.FullName).Length
        
        # Convert to WebP
        $result = & cwebp -q $quality $file.FullName -o $webpPath 2>&1
        
        if (Test-Path $webpPath) {
            $newSize = (Get-Item $webpPath).Length
            $savings = [math]::Round((($originalSize - $newSize) / $originalSize) * 100, 1)
            
            $stats.Converted++
            $stats.OriginalSize += $originalSize
            $stats.NewSize += $newSize
            
            Write-Host "✓ Converted: $($file.Name)" -ForegroundColor Green
            Write-Host "  Original: $([math]::Round($originalSize/1KB, 1)) KB -> WebP: $([math]::Round($newSize/1KB, 1)) KB (${savings}% savings)" -ForegroundColor DarkGreen
        } else {
            Write-Host "✗ Failed: $($file.Name)" -ForegroundColor Red
            $stats.Failed++
        }
    } catch {
        Write-Host "✗ Error converting: $($file.Name)" -ForegroundColor Red
        Write-Host "  Error: $_" -ForegroundColor Red
        $stats.Failed++
    }
}

# Summary
Write-Host ""
Write-Host "==================================" -ForegroundColor Cyan
Write-Host "Conversion Summary" -ForegroundColor Cyan
Write-Host "==================================" -ForegroundColor Cyan
Write-Host "✓ Converted: $($stats.Converted)" -ForegroundColor Green
Write-Host "⊘ Skipped: $($stats.Skipped)" -ForegroundColor Gray
Write-Host "✗ Failed: $($stats.Failed)" -ForegroundColor Red
Write-Host ""

if ($stats.Converted -gt 0) {
    $totalSavings = $stats.OriginalSize - $stats.NewSize
    $percentSavings = [math]::Round(($totalSavings / $stats.OriginalSize) * 100, 1)
    
    Write-Host "Original total size: $([math]::Round($stats.OriginalSize/1MB, 2)) MB" -ForegroundColor White
    Write-Host "New total size: $([math]::Round($stats.NewSize/1MB, 2)) MB" -ForegroundColor Green
    Write-Host "Total savings: $([math]::Round($totalSavings/1MB, 2)) MB (${percentSavings}%)" -ForegroundColor Green
}

Write-Host ""
Write-Host "Done! ✨" -ForegroundColor Cyan
