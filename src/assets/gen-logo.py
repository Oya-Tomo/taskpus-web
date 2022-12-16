size = 256

BASE_CIRCLE = 250

HEAD_CIRCLE_ANCHOR = (250 / 500, 200 / 500)
HEAD_CIRCLE_RADIUS = 120 / 500

FOOT_POS_1 = (420 / 500, 300 / 500)
FOOT_CON_1 = (350 / 500, 450 / 500)

FOOT_POS_2 = (370 / 500, 400 / 500)
FOOT_CON_2 = (300 / 500, 450 / 500)

FOOT_POS_3 = (250 / 500, 430 / 500)
FOOT_CON_3 = (250 / 500, 400 / 500)

FOOT_POS_4 = (130 / 500, 400 / 500)
FOOT_CON_4 = (200 / 500, 450 / 500)

FOOT_POS_5 = (80 / 500, 300 / 500)
FOOT_CON_5 = (150 / 500, 450 / 500)

CHECK_STR_POS = (180 / 500, 180 / 500)
CHECK_CRN_POS = (230 / 500, 230 / 500)
CHECK_END_PRO = (320 / 500, 160 / 500)

src = f"""\
<svg xmlns="http://www.w3.org/2000/svg" width="{size}" height="{size}">
    <circle cx="{size / 2}" cy="{size / 2}" r="{(size - (20 / 500 * size) )/ 2}" stroke="rgb(230, 100, 100)" stroke-width="{20 / 500 * size}" fill="transparent"/>
    <path stroke="rgb(230, 100, 100)" stroke-width="{30 / 500 * size}" stroke-linecap="round" d="M {size / 2} {size / 5 * 2} Q {FOOT_CON_1[0] * size} {FOOT_CON_1[1] * size} {FOOT_POS_1[0] * size} {FOOT_POS_1[1] * size} " fill="transparent"/>
    <path stroke="rgb(230, 100, 100)" stroke-width="{30 / 500 * size}" stroke-linecap="round" d="M {size / 2} {size / 5 * 2} Q {FOOT_CON_2[0] * size} {FOOT_CON_2[1] * size} {FOOT_POS_2[0] * size} {FOOT_POS_2[1] * size} " fill="transparent"/>
    <path stroke="rgb(230, 100, 100)" stroke-width="{30 / 500 * size}" stroke-linecap="round" d="M {size / 2} {size / 5 * 2} Q {FOOT_CON_3[0] * size} {FOOT_CON_3[1] * size} {FOOT_POS_3[0] * size} {FOOT_POS_3[1] * size} " fill="transparent"/>
    <path stroke="rgb(230, 100, 100)" stroke-width="{30 / 500 * size}" stroke-linecap="round" d="M {size / 2} {size / 5 * 2} Q {FOOT_CON_4[0] * size} {FOOT_CON_4[1] * size} {FOOT_POS_4[0] * size} {FOOT_POS_4[1] * size} " fill="transparent"/>
    <path stroke="rgb(230, 100, 100)" stroke-width="{30 / 500 * size}" stroke-linecap="round" d="M {size / 2} {size / 5 * 2} Q {FOOT_CON_5[0] * size} {FOOT_CON_5[1] * size} {FOOT_POS_5[0] * size} {FOOT_POS_5[1] * size} " fill="transparent"/>
    <circle cx="{size / 2}" cy="{size / 5 * 2}" r="{120 / 500 * size}" stroke="rgb(230, 100, 100)" stroke-width="{20 / 500 * size}" fill="rgb(230, 100, 100)"/>
    <path stroke="white" stroke-width="{20 / 500 * size}" stroke-linecap="round" d="M {CHECK_STR_POS[0] * size} {CHECK_STR_POS[1] * size} L {CHECK_CRN_POS[0] * size} {CHECK_CRN_POS[1] * size} L {CHECK_END_PRO[0] * size} {CHECK_END_PRO[1] * size}" fill="transparent" />
</svg>\
"""

with open("logo.svg", mode="w") as f:
    f.write(src)