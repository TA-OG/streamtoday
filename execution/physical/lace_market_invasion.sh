#!/bin/bash
# Lace Market Door-to-Door Invasion Script
# Physical guerrilla marketing - walk into every business within 500m

STUDIO_ADDRESS="20 Fletcher Gate, Nottingham NG1 2FZ"
QR_CODE_URL="https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=https://streamtoday.co.uk/book"

# Target businesses within 500m of Fletcher Gate
TARGET_BUSINESSES=(
    "Antenna - 9A Beck Street"
    "BioCity - Pennyfoot Street"
    "Metronome - Brown Street"
    "The Big House - Stoney Street"
    "Accelerate Places - Stoney Street"
    "Annie's Burger Shack - Broadway"
    "Cafe Sobar - Friar Lane"
    "Cartwheel Cafe - George Street"
    "Thea Caffea - Stoney Street"
    "200 Degrees Coffee - Carrington Street"
    "Das Kino - Fletcher Gate"
    "Pit & Pendulum - Victoria Centre"
    "Cock & Hoop - Pelham Street"
    "Ye Olde Salutation - Maid Marian Way"
    "Lincolnshire Poacher - Mansfield Road"
    "Rescue Rooms - Masonic Place"
    "Rock City - Talbot Street"
    "Bodega - Pelham Street"
    "Rough Trade - Broad Street"
    "Waterstones - Bridlesmith Gate"
)

echo "=========================================="
echo "LACE MARKET INVASION - PHYSICAL DROPS"
echo "=========================================="
echo ""
echo "Studio: $STUDIO_ADDRESS"
echo "Target: ${#TARGET_BUSINESSES[@]} businesses"
echo ""

# Generate tracking sheet
cat > invasion_tracking.csv << EOF
Business,Address,Date Visited,Contact Name,Contact Email,Phone,Outcome,Follow Up Date,Notes
EOF

for business in "${TARGET_BUSINESSES[@]}"; do
    echo "□ $business"
    echo "$business,,,,,,,," >> invasion_tracking.csv
done

echo ""
echo "=========================================="
echo "MATERIALS NEEDED:"
echo "=========================================="
echo ""
echo "1. iPad with studio tour video (pre-loaded)"
echo "2. Premium business cards (500x)"
echo "3. QR code cards linking to booking"
echo "4. One-pager with pricing"
echo "5. Notepad for contact details"
echo "6. Tracking spreadsheet (printed)"
echo ""
echo "=========================================="
echo "THE PITCH:"
echo "=========================================="
echo ""
echo '"Hi, I\'m Allan from StreamToday Studios. We\'re just down the road at"
echo "20 Fletcher Gate - professional podcast and video studio."
echo ""
echo "Thought you should know what we do since we\'re neighbours."
echo "[Show iPad video]"
echo ""
echo "We do live editing - record and walk out with finished content."
echo "£299 a session or £549 monthly."
echo ""
echo "Here\'s a card. QR code takes you straight to booking."
echo "Any questions?"
echo ""
echo "=========================================="
echo "DAILY TARGET: 25 businesses"
echo "TIME PER BUSINESS: 5-10 minutes"
echo "=========================================="

# Generate the leave-behind card HTML
cat > leave_behind_card.html << 'EOF'
<!DOCTYPE html>
<html>
<head>
<style>
body { font-family: Arial, sans-serif; margin: 0; padding: 0; }
.card { width: 350px; height: 200px; background: #000; color: #fff; padding: 20px; box-sizing: border-box; }
.logo { font-size: 24px; font-weight: bold; margin-bottom: 10px; }
.tagline { font-size: 14px; color: #ccc; margin-bottom: 20px; }
.features { font-size: 12px; line-height: 1.6; margin-bottom: 20px; }
.cta { background: #fff; color: #000; padding: 10px; text-align: center; font-weight: bold; }
.address { font-size: 11px; color: #999; margin-top: 15px; }
</style>
</head>
<body>
<div class="card">
<div class="logo">StreamToday Studios</div>
<div class="tagline">Professional Podcast & Video Production</div>
<div class="features">
✓ LIVE EDITING while you record<br>
✓ Same-day file delivery<br>
✓ 20 Fletcher Gate, Lace Market<br>
✓ £299/session | £549/month
</div>
<div class="cta">Book: streamtoday.co.uk/book</div>
<div class="address">20 Fletcher Gate, Nottingham NG1 2FZ | 07763 741309</div>
</div>
</body>
</html>
EOF

echo ""
echo "✓ Generated leave_behind_card.html"
echo "✓ Generated invasion_tracking.csv"
echo ""
echo "Print the card on 350gsm black card stock with white foil."
echo ""
