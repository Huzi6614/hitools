     var data_array = [];
     data_array['USA'] = '<select class="tool_inp_sty px-3 w-100 bg_383b3d" id="fee"><optgroup label="Domestic"><option value="2.9||.30" class="align_options">2.9% + $.30 (via online transaction)</option><option class="align_options" value="2.7||.30">2.7% + $.30 (via store location)</option><option class="align_options" value="2.2||.30">2.2% + $.30 (Nonprofit)</option><option class="align_options" value="5||.05">5% + $.05 (Micropayment)</option></optgroup><optgroup label="International"><option class="align_options" value="4.4||.30">4.4% + $.30 (via online transaction)</option><option class="align_options" value="4.2||.30">4.2% + $.30 (via store location)</option><option class="align_options" value="3.7||.30">3.7% + $.30 (Nonprofit)</option><option class="align_options" value="6.5||.05">6.5% + $.05 (Micropayment)</option></optgroup><optgroup label="Mobile Card Reader"><option class="align_options" value="2.7||.00">2.7% (swiped &amp; check-in transactions)</option><option class="align_options" value="3.5||.15">3.5% + $.15 (keyed or scanned transactions)</option><option class="align_options" value="5.7||.00">4.2% (International +1.5% cross-border fee)</option></optgroup><optgroup label="Virtual Terminal"><option class="align_options" value="3.1||.30">3.1% + $.30 (Domestic)</option><option class="align_options" value="4.6||.30">4.6% + $.30 (Cross-border)</option></optgroup></select>';

     data_array['UK'] = '<select class="tool_inp_sty px-3 w-100 bg_383b3d" id="fee"><optgroup label="Domestic"><option value="2.9||.30" selected="">2.9% + £.30</option></optgroup><optgroup label="International - from Europe I, Northern Europe"><option value="3.4||.30">3.4% + £.30</option></optgroup><optgroup label="International - from Canada, USA, Europe II, rest of the world"><option value="4.9||.30">4.9% + £.30</option></optgroup><optgroup label="Charity"><option value="1.4||.20">1.4% + £.20</option></optgroup><optgroup label="Micropayment"><option value="5||.05">5% + £.05</option></optgroup></select>';

     data_array['AUD'] = '<select class="tool_inp_sty px-3 w-100 bg_383b3d" id="fee"><optgroup label="Domestic"><option value="2.6||.30" selected="">2.6% + $.30 (Online payments)</option><option value="1.75||.30">1.75% + $.30 (Website Payments Pro - Hosted Solution)</option><option value="2.6||.30">2.6% + $.30 (Invoices)</option><option value="1.95||.00">1.95% (PayPal Here card reader)</option><option value="2.9||.30">2.9% + $.30 (PayPal Here - manual entry )</option><option value="3.6||.30">3.6% + $.30 (Virtual Terminal)</option><option value="1.1||.30">1.1% + $.30 (Donations)</option></optgroup><optgroup label="International"><option value="3.6||.30">3.6% + $.30 (Online payments)</option><option value="3.6||.30">3.6% + $.30 (Website Payments Pro - Hosted Solution)</option><option value="3.6||.30">3.6% + $.30 (Invoices)</option><option value="1.95||.00">1.95% (PayPal Here card reader)</option><option value="2.9||.30">2.9% + $.30 (PayPal Here - manual entry   )</option><option value="4.6||.30">4.6% + $.30 (Virtual Terminal)</option><option value="2.1||.30">2.1% + $.30 (Donations)</option></optgroup></select>';

     data_array['AR'] = '<select class="tool_inp_sty px-3 w-100 bg_383b3d" id="fee" ><optgroup label="Domestic and International"><option value="5.4||.30" selected="">5.4% + $.30</option></optgroup><optgroup label="Micropayment"><option value="6.5||.05">6.5% + $.05</option></optgroup></select>';

     data_array['BG'] = '<select class="tool_inp_sty px-3 w-100 bg_383b3d" id="fee"><optgroup label="Domestic"><option value="3.4||.35" selected="">3,4% + €,35 (€0 to €2500)</option><option value="2.9||.35">2,9% + €,35 (€2500+ to €10 000)</option><option value="2.3||.35">2,3% + €,35 (€10 000+ to €50 000)</option><option value="1.9||.35">1,9% + €,35 (€50 000+ to €100 000)</option><option value="1.7||.35">1,7% + €,35 (€100 000+)</option></optgroup><optgroup label="Nonprofit"><option value="1.7||.35">1,7% + €,35</option></optgroup><optgroup label="Micropayment"><option value="5||.05">5% + €,05</option></optgroup></select>';

     data_array['BR'] = '<select class="tool_inp_sty px-3 w-100 bg_383b3d" id="fee"><optgroup label="Domestic"><option value="4.79||.60" selected="">4,79% + R,60 (For funds availability within 24 hours)</option><option value="3.6||.60">3,6% + R,60 (For funds availability within 30 days)</option></optgroup><optgroup label="International"><option value="6.4||.60">6,4% + R,60</option></optgroup></select>';

     data_array['BL'] = '<select class="tool_inp_sty px-3 w-100 bg_383b3d" id="fee"><optgroup label="Domestic"><option value="3.4||.35" selected="">3.4% + €.35 (€0 to €2500)</option><option value="2.9||.35">2.9% + €.35 (€2500+ to €10,000)</option><option value="2.7||.35">2.7% + €.35 (€10,000+ to €50,000)</option><option value="2.4||.35">2.4% + €.35 (€50,000+ to €100,000)</option><option value="1.9||.35">1.9% + €.35 (€100,000+)</option></optgroup></select>';

     data_array['CA'] = '<select class="tool_inp_sty px-3 w-100 bg_383b3d" id="fee"><optgroup label="Domestic"><option value="2.9||.30" selected="">2.9% + $.30</option><option value="1.6||.30">1.6% + $.30 (Charitable Organizations)</option><option value="2.9||.30">2.9% + $.30 (PayPal Payments Pro)</option><option value="3.1||.30">3.1% + $.30 (Virtual Terminal)</option><option value="5.0||.05">5.0% + $.05 (Micropayment)</option></optgroup><optgroup label="From U.S."><option value="3.7||.30">3.7% + $.30</option><option value="1.6||.30">1.6% + $.30 (Charitable Organizations)</option><option value="3.7||.30">3.7% + $.30 (PayPal Payments Pro)</option><option value="3.9||.30">3.9% + $.30 (Virtual Terminal)</option><option value="5.0||.05">5.0% + $.05 (Micropayment)</option></optgroup><optgroup label="From Outside Canada or U.S."><option value="3.9||.30">3.9% + $.30</option><option value="2.6||.30">2.6% + $.30 (Charitable Organizations)</option><option value="3.9||.30">3.9% + $.30 (PayPal Payments Pro)</option><option value="4.1||.30">4.1% + $.30 (Virtual Terminal)</option><option value="6||.05">6.0% + $.05 (Micropayment)</option></optgroup><optgroup label="American Express"><option value="3.5||.00">3.5% (PayPal Payments Pro or Virtual Terminal)</option></optgroup></select>';

     data_array['CH'] = '<select class="tool_inp_sty px-3 w-100 bg_383b3d" id="fee"><optgroup label="Domestic and International"><option value="5.4||.30" selected="">5.4% + $.30</option></optgroup><optgroup label="Micropayment"><option value="6.5||.05">6.5% + $.05</option></optgroup></select>';

     data_array['CHI'] = '<select class="tool_inp_sty px-3 w-100 bg_383b3d" id="fee"><optgroup label="Website, email and invoice payments"><option value="4.4||.30" selected="">4.4% + $.30 ($3000 or lower monthly sales)</option><option value="3.9||.30">3.9% + $.30 ($3000 - $10,000 monthly sales)</option><option value="3.7||.30">3.7% + $.30 ($10,000 - $100,000 monthly sales)</option><option value="3.4||.30">3.4% + $.30 (Higher than $100,000)</option></optgroup></select>';

     data_array['CB'] = '<select class="tool_inp_sty px-3 w-100 bg_383b3d" id="fee"><optgroup label="Domestic and International"><option value="5.4||.30" selected="">5.4% + $.30</option></optgroup><optgroup label="Micropayment"><option value="6.5||.05">6.5% + $.05</option></optgroup></select>';

     data_array['CR'] = '<select class="tool_inp_sty px-3 w-100 bg_383b3d" id="fee"><optgroup label="Domestic and International"><option value="5.4||.30" selected="">5.4% + $.30 ($0 to $3000)</option><option value="4.9||.30">4.9% + $.30 ($3000+ to $10,000)</option><option value="4.7||30">4.7% + $.30 ($10,000+ to $100,000)</option><option value="4.4||.30">4.4% + $.30 ($100,000+)</option></optgroup><optgroup label="Micropayment"><option value="5||.05">5% + $.05</option></optgroup></select>';

     data_array['CY'] = '<select class="tool_inp_sty px-3 w-100 bg_383b3d" id="fee"><optgroup label="Domestic"><option value="3.4||.35" selected="">3.4% + €.35 (€0 to €2500)</option><option value="2.9||.35">2.9% + €.35 (€2500+ to €10,000)</option><option value="2.7||.35">2.7% + €.35 (€10,000+ to €50,000)</option><option value="2.4||.35">2.4% + €.35 (€50,000+ to €100,000)</option><option value="1.9||.35">1.9% + €.35 (€100,000+)</option></optgroup></select>';

     data_array['CZ'] = '<select class="tool_inp_sty px-3 w-100 bg_383b3d" id="fee"><optgroup label="Domestic"><option value="3.4||10" selected="">3.4% + 10 CZK (0 to 70,000 CZK)</option><option value="2.9||10">2.9% + 10 CZK (70,000+ CZK to 280,000 CZK)</option><option value="2.7||10">2.7% + 10 CZK (280,000+ CZK to 1,500,000 CZK)</option><option value="2.4||10">2.4% + 10 CZK (1,500,000+ CZK to 3,000,000 CZK)</option><option value="1.9||10">1.9% + 10 CZK (3,000,000+ CZK)</option></optgroup></select>';

     data_array['DK'] = '<select class="tool_inp_sty px-3 w-100 bg_383b3d" id="fee"><optgroup label="Domestic"><option value="2.4||2.60" selected="">3,4% + 2,60 DKK (0 DKK to 20.000 DKK)</option><option value="2.9||2.60">2,9% + 2,60 DKK (20.000+ DKK to 80.000 DKK)</option><option value="2.7||2.60">2,7% + 2,60 DKK (80.000+ DKK to 400.000 DKK)</option><option value="2.4||2.60">2,4% + 2,60 DKK (400.000+ DKK to 800.000 DKK)</option><option value="1.9||2.60">1,9% + 2,60 DKK (800.000+ DKK)</option></optgroup></select>';

     data_array['FN'] = '<select class="tool_inp_sty px-3 w-100 bg_383b3d" id="fee"><optgroup label="Domestic"><option value="3.4||.35" selected="">3.4% + €.35 (€0 to €2500)</option><option value="2.9||.35">2.9% + €.35 (€2500+ to €10,000)</option><option value="2.7||.35">2.7% + €.35 (€10,000+ to €50,000)</option><option value="2.4||.35">2.4% + €.35 (€50,000+ to €100,000)</option><option value="1.9||.35">1.9% + €.35 (€100,000+)</option></optgroup></select>';

     data_array['FR'] = '<select class="tool_inp_sty px-3 w-100 bg_383b3d" id="fee"><optgroup label="Domestic"><option value="2.9||.35" selected="">2,9% + €,35</option></optgroup><optgroup label="Cross-border"><option value="3.4||.35">3,4% + €,35 (from Northern Europe &amp; Europe I)</option><option value="4.9||.35">4,9% + €,35 (from Europe II, United States, Canada, rest of the world)</option></optgroup></select>';

     data_array['GR'] = '<select class="tool_inp_sty px-3 w-100 bg_383b3d" id="fee"><optgroup label="Domestic"><option value="2.49||.35" selected="">2,49% + €,35 (Less than €2.000)</option><option value="2.19||.35">2,19% + €,35 (€2.000+ to €5.000)</option><option value="1.99||.35">1,99% + €,35 (€5.000+ to €25.000)</option><option value="1.79||.35">1,79% + €,35 (€25.000+ to €100.000)</option><option value="1.49||.35">1,49% + €,35 (€100.000+)</option><option value="10||.10">10% + €,10 (Micropayment)</option><option value="1.5||.35">1.5% + €,35 (Charity)</option></optgroup><optgroup label="Cross-border"><option value="4.29||.35">4,29% + €,35 (+1,8% from Northern Europe)</option><option value="4.49||.35">4,49% + €,35 (+2,0% from Europe I &amp; North America)</option><option value="5.49||.35">5,49% + €,35 (+3,0% from Europe II)</option><option value="5.79||.35">5,79% + €,35 (+3,3% from Latin America, APAC, Other countries)</option><option value="12||.10">12% + €,10 (Micropayment)</option></optgroup></select>';

     data_array['GC'] = '<select class="tool_inp_sty px-3 w-100 bg_383b3d" id="fee"><optgroup label="Domestic"><option value="3.4||.35" selected="">3.4% + €.35 (€0 to €2500)</option><option value="2.9||.35">2.9% + €.35 (€2500+ to €10,000)</option><option value="2.7||.35">2.7% + €.35 (€10,000+ to €50,000)</option><option value="2.4||.35">2.4% + €.35 (€50,000+ to €100,000)</option><option value="1.9||.35">1.9% + €.35 (€100,000+)</option></optgroup><optgroup label="International"><option value="3.9||.35">3.9% + €.35 (from Europe I, Northern Europe)</option><option value="5.4||.35">5.4% + €.35 (from Canada, USA, Europe II, Rest of World)</option></optgroup></select>';

     data_array['GT'] = '<select class="tool_inp_sty px-3 w-100 bg_383b3d" id="fee"><optgroup label="Domestic and International"><option value="5.4||.30" selected="">5.4% + $.30 ($0 to $3000)</option><option value="4.9||.30">4.9% + $.30 ($3000+ to $10,000)</option><option value="4.7||.30">4.7% + $.30 ($10,000+ to $100,000)</option><option value="4.4||.30">4.4% + $.30 ($100,000+)</option></optgroup></select>';

     data_array['HK'] = '<select class="tool_inp_sty px-3 w-100 bg_383b3d" id="fee"><optgroup label="Domestic"><option value="3.9||2.35" selected="">3.9% + $2.35</option></optgroup><optgroup label="International"><option value="4.4||2.35">4.4% + $2.35</option></optgroup></select>';

     data_array['HU'] = '<select class="tool_inp_sty px-3 w-100 bg_383b3d" id="fee"><optgroup label="Domestic"><option value="3.4||90" selected="">3.4% + 90 Ft (0 Ft to 700,000 Ft)</option><option value="2.9||90">2.9% + 90 Ft (700,000+ Ft to 2,500,000 Ft)</option><option value="2.7||90">2.7% + 90 Ft (2,500,000+ Ft to 12,500,000 Ft)</option><option value="2.4||90">2.4% + 90 Ft (12,500,000+ Ft to 25,000,000 Ft)</option><option value="1.9||90">1.9% + 90 Ft (25,000,000+ Ft)</option></optgroup></select>';

     data_array['IN'] = '<select class="tool_inp_sty px-3 w-100 bg_383b3d" id="fee"><optgroup label="Local"><option value="2.5||3" selected="">2.5% + ₹3</option></optgroup><optgroup label="International - Website, online invoices and online marketplaces"><option value="4.4||3">4.4% + ₹3 (Up to $3000 monthly sales)</option><option value="3.9||3">3.9% + ₹3 ($3000+ to $10,000 monthly sales)</option><option value="3.7||3">3.7% + ₹3 ($10,000+ to $100,000 monthly sales)</option><option value="3.4||3">3.4% + ₹3 ($100,000+ monthly sales)</option></optgroup></select>';

     data_array['ID'] = '<select class="tool_inp_sty px-3 w-100 bg_383b3d" id="fee"><optgroup label="Domestic"><option value="3.9||.30" selected="">3.9% + $.30</option></optgroup><optgroup label="International"><option value="4.4||.30">4.4% + $.30</option></optgroup></select>';

     data_array['IR'] = '<select class="tool_inp_sty px-3 w-100 bg_383b3d" id="fee"><optgroup label="Domestic"><option value="3.4||.35" selected="">3.4% + €.35 (€0 to €2500)</option><option value="2.9||.35">2.9% + €.35 (€2500+ to €10,000)</option><option value="2.4||.35">2.4% + €.35 (€10,000+ to €50,000)</option><option value="1.9||.35">1.9% + €.35 (€50,000+ to €100,000)</option></optgroup><optgroup label="Cross-border"><option value="3.8||.35">3.8% + €.35 (Northern Europe)</option><option value="3.9||.35">3.9% + €.35 (Europe I)</option><option value="4.4||.35">4.4% + €.35 (USA, Canada)</option><option value="4.7||.35">4.7% + €.35 (Europe II)</option><option value="5.4||.35">5.4% + €.35 (Rest of World)</option></optgroup></select>';

     data_array['IS'] = '<select class="tool_inp_sty px-3 w-100 bg_383b3d" id="fee"><optgroup label="Domestic"><option value="3.4||1.20" selected="">3.4% + ₪1.20</option></optgroup><optgroup label="International"><option value="4.4||1.20">4.4% + ₪1.20 (USA, Canada, Northern Europe, Europe I)</option><option value="5.4||1.20">5.4% + ₪1.20 (All other countries)</option></optgroup></select>';

     data_array['IT'] = '<select class="tool_inp_sty px-3 w-100 bg_383b3d" id="fee"><optgroup label="Domestic"><option value="3.4||.35" selected="">3,4% + €,35</option><option value="5||.10">5,0% + €,10 (Micropayment)</option></optgroup><optgroup label="International"><option value="3.9||.35">3,9% + €,35 (Europe I, Northern Europe)</option><option value="5.4||.35">5,4% + €,35 (Europe II, USA, Canada, Rest of World)</option><option value="6.0||.10">6,0% + €,10 (Micropayment)</option></optgroup><optgroup label="Charities"><option value="1.8||.35">1,8% + €,35</option></optgroup></select>';

     data_array['JP'] = '<select class="tool_inp_sty px-3 w-100 bg_383b3d" id="fee"><optgroup label="Domestic"><option value="3.6||40" selected="">3.6% + ¥40 (¥0 to ¥300,000)</option><option value="3.4||40">3.4% + ¥40 (¥300,000+ to ¥1,000,000)</option><option value="3.2||40">3.2% + ¥40 (¥1,000,000+ to ¥10,000,000)</option><option value="2.9||40">2.9% + ¥40 (¥10,000,000+)</option><option value="5||7">5% + ¥7 (Micropayment ¥2357 or less)</option></optgroup><optgroup label="Cross-border"><option value="4.1||40">4.1% + ¥40 (¥0 to ¥300,000)</option><option value="3.9||40">3.9% + ¥40 (¥300,000+ to ¥1,000,000)</option><option value="3.7||40">3.7% + ¥40 (¥1,000,000+ to ¥10,000,000)</option><option value="3.4||40">3.4% + ¥40 (¥10,000,000+)</option><option value="6||7">6% + ¥7 (Micropayment ¥1736 or less)</option></optgroup></select>';

     data_array['LT'] = '<select class="tool_inp_sty px-3 w-100 bg_383b3d" id="fee"><optgroup label="Domestic"><option value="3.4||.34" selected="">3.4% + €.35 (€0 to €2500)</option><option value="2.9||.35">2.9% + €.35 (€2500+ to €10,000)</option><option value="2.7||.35">2.7% + €.35 (€10,000+ to €50,000)</option><option value="2.4||.35">2.4% + €.35 (€50,000+ to €100,000)</option><option value="1.9||.35">1.9% + €.35 (€100,000+)</option></optgroup></select>';

     data_array['LU'] = '<select class="tool_inp_sty px-3 w-100 bg_383b3d" id="fee"><optgroup label="Domestic"><option value="3.4||.35" selected="">3.4% + €.35 (€0 to €2500)</option><option value="2.9||.35">2.9% + €.35 (€2500+ to €10,000)</option><option value="2.7||.35">2.7% + €.35 (€10,000+ to €50,000)</option><option value="2.4||.35">2.4% + €.35 (€50,000+ to €100,000)</option><option value="1.9||.35">1.9% + €.35 (€100,000+)</option></optgroup></select>';

     data_array['MY'] = '<select class="tool_inp_sty px-3 w-100 bg_383b3d" id="fee"><optgroup label="Domestic - Web, email and invoice payments"><option value="3.9||2.00" selected="">3.9% + 2.00 MYR (Up to 12,000 MYR)</option><option value="3.4||2.00">3.4% + 2.00 MYR (12,000.01 to 40,000 MYR)</option><option value="3.2||2.00">3.2% + 2.00 MYR (40,000.01 - 70,000 MYR)</option><option value="2.9||2.00">2.9% + 2.00 MYR (70,000.01 - 400,000 MYR)</option><option value="2.7||2.00">2.7% + 2.00 MYR (Above 400,000 MYR)</option></optgroup><optgroup label="International - Web, email and invoice payments"><option value="4.4||2.00">4.4% + 2.00 MYR (Up to 12,000 MYR)</option><option value="3.9||2.00">3.9% + 2.00 MYR (12,000.01 to 40,000 MYR)</option><option value="3.7||2.00">3.7% + 2.00 MYR (40,000.01 - 70,000 MYR)</option><option value="3.4||2.00">3.4% + 2.00 MYR (70,000.01 - 400,000 MYR)</option><option value="3.2||2.00">3.2% + 2.00 MYR (Above 400,000 MYR)</option></optgroup></select>';

     data_array['MT'] = '<select class="tool_inp_sty px-3 w-100 bg_383b3d" id="fee"><optgroup label="Domestic"><option value="3.4||.35" selected="">3.4% + €.35 (€0 to €2500)</option><option value="2.9||.35">2.9% + €.35 (€2500+ to €10,000)</option><option value="2.7||.35">2.7% + €.35 (€10,000+ to €50,000)</option><option value="2.4||.35">2.4% + €.35 (€50,000+ to €100,000)</option><option value="1.9||.35">1.9% + €.35 (€100,000+)</option></optgroup></select>';

     data_array['MX'] = '<select class="tool_inp_sty px-3 w-100 bg_383b3d" id="fee"><optgroup label="Domestic"><option value="3.95||4" selected="">3.95% + $4 (up to $50,000 MXN)</option><option value="3.65||4">3.65% + $4 ($50,000 - $249,999 MXN)</option><option value="3.45||4">3.45% + $4 ($250,000 - $499,999 MXN)</option><option value="3.15||4">3.15% + $4 ($500,000 - $999,999 MXN)</option><option value="2.95||4">2.95% + $4 (+$1,000,000 MXN)</option><option value="5.0||.55">5.0% + $.55 MXN (Micropayment)</option></optgroup><optgroup label="Cross-border"><option value="4.45||4">4.45% + $4 (up to $50,000 MXN)</option><option value="4.15||4">4.15% + $4 ($50,000 - $249,999 MXN)</option><option value="3.95||4">3.95% + $4 ($250,000 - $499,999 MXN)</option><option value="3.65||4">3.65% + $4 ($500,000 - $999,999 MXN)</option><option value="3.45||4">3.45% + $4 (+$1,000,000 MXN)</option><option value="5.5||.55">5.5% + $.55 MXN (Micropayment)</option></optgroup></select>';

     data_array['MN'] = '<select class="tool_inp_sty px-3 w-100 bg_383b3d" id="fee"><optgroup label="Domestic"><option value="3.4||.30" selected="">3.4% + $.30 ($0 to $3000)</option><option value="2.9||.30">2.9% + $.30 ($3000+ to $10,000)</option><option value="2.7||.30">2.7% + $.30 ($10,000+ to $100,000)</option><option value="2.4||.30">2.4% + $.30 ($100,000+)</option></optgroup></select>';

     data_array['MR'] = '<select class="tool_inp_sty px-3 w-100 bg_383b3d" id="fee"><optgroup label="Domestic &amp; International"><option value="4.4||.30" selected="">4.4% + $.30</option></optgroup></select>';

     data_array['NL'] = '<select class="tool_inp_sty px-3 w-100 bg_383b3d" id="fee"><optgroup label="Domestic"><option value="3.4||.35" selected="">3,4% + €,35 (€0 to €2500)</option><option value="2.9||.35">2,9% + €,35 (€2500+ to €10.000)</option><option value="2.3||.35">2,3% + €,35 (€10.000+ to €50.000)</option><option value="1.9||.35">1,9% + €,35 (€50.000+ to €100.000)</option><option value="1.5||.35">1,5% + €,35 (€100.000+)</option><option value="5||.05">5% + €,05 (Micropayment)</option></optgroup><optgroup label="International"><option value="3.9||.35">3,9% + €,35 (Northern Europe, Europe I)</option><option value="5.4||.35">5,4% + €,35 (Europe II, USA, Canada, Rest of World)</option><option value="6||.05">6% + €,05 (Micropayment)</option></optgroup></select>';

     data_array['NZ'] = '<select class="tool_inp_sty px-3 w-100 bg_383b3d" id="fee"><optgroup label="Domestic"><option value="3.4||.45" selected="">3.4% + $.45 NZD ($0 to $5000 NZD)</option><option value="2.9||.45">2.9% + $.45 NZD ($5000+ NZD to $15,000 NZD)</option><option value="2.7||.45">2.7% + $.45 NZD ($15,000+ NZD to $150,000 NZD)</option><option value="2.4||.45">2.4% + $.45 NZD ($150,000+ NZD)</option></optgroup></select>';

     data_array['NO'] = '<select class="tool_inp_sty px-3 w-100 bg_383b3d" id="fee"><optgroup label="Domestic"><option value="3.4||2.80" selected="">3,4% + 2,80 kr (0 to 20 000 kr)</option><option value="2.9||2.80">2,9% + 2,80 kr (20 000+ kr to 80 000 kr)</option><option value="2.7||2.80">2,7% + 2,80 kr (80 000+ kr to 400 000 kr)</option><option value="2.4||2.80">2,4% + 2,80 kr (400 000+ kr to 800 000 kr)</option><option value="1.9||2.80">1,9% + 2,80 kr (800 000+ kr)</option></optgroup></select>';

     data_array['PR'] = '<select class="tool_inp_sty px-3 w-100 bg_383b3d" id="fee"><optgroup label="Domestic and International"><option value="5.4||.30" selected="">5.4% + $.30 ($0 to $3000)</option><option value="4.9||.30">4.9% + $.30 ($3000+ to $10,000)</option><option value="4.7||.30">4.7% + $.30 ($10,000+ to $100,000)</option><option value="4.4||.30">4.4% + $.30 ($100,000+)</option></optgroup><optgroup label="Micropayment"><option value="5||.05">5% + $.05</option></optgroup></select>';

     data_array['PH'] = '<select class="tool_inp_sty px-3 w-100 bg_383b3d" id="fee"><optgroup label="Domestic"><option value="3.9||15" selected="">3.9% + ₱15</option></optgroup><optgroup label="International"><option value="4.4||15">4.4% + ₱15</option></optgroup></select>';

     data_array['PL'] = '<select class="tool_inp_sty px-3 w-100 bg_383b3d" id="fee"><optgroup label="Domestic"><option value="2.9||.80" selected="">2,9% + zł,80 (zł0 to zł5 000)</option><option value="2.5||.80">2,5% + zł,80 (zł5 000+ to zł20 000)</option><option value="2.3||80">2,3% + zł,80 (zł20 000+ to zł100 000)</option><option value="2.1||.80">2,1% + zł,80 (zł100 000+ to zł200 000)</option><option value="1.9||.80">1,9% + zł,80 (zł200 000+)</option></optgroup><optgroup label="Micropayment"><option value="5||.40">5% + zł,40</option></optgroup></select>';

     data_array['PT'] = '<select class="tool_inp_sty px-3 w-100 bg_383b3d" id="fee"><optgroup label="Domestic"><option value="2.9||.35" selected="">2.9% + €.35</option><option value="1.9||.35">1.9% + €.35 (Charity)</option><option value="5||.05">5% + €.05 (Micropayment)</option></optgroup><optgroup label="International"><option value="3.4||.35">3.4% + €.35 (Europe I, Northern Europe)</option><option value="4.9||.35">4.9% + €.35 (Europe II, USA, Canada, Rest of World)</option><option value="6||.05">6% + €.05 (Micropayment)</option></optgroup></select>';

     data_array['RO'] = '<select class="tool_inp_sty px-3 w-100 bg_383b3d" id="fee"><optgroup label="Domestic"><option value="3.4||.35" selected="">3.4% + €.35 (€0 to €2500)</option><option value="2.9||.35">2.9% + €.35 (€2500+ to €10,000)</option><option value="2.7||.35">2.7% + €.35 (€10,000+ to €50,000)</option><option value="2.4||.35">2.4% + €.35 (€50,000+ to €100,000)</option><option value="1.9||.35">1.9% + €.35 (€100,000+)</option></optgroup></select>';

     data_array['RU'] = '<select class="tool_inp_sty px-3 w-100 bg_383b3d" id="fee"><optgroup label="Domestic"><option value="3.4||.30" selected="">3,4% + $,30 ($0 to $3000)</option><option value="2.9||.30">2,9% + $,30 ($3000+ to $10 000)</option><option value="2.7||.30">2,7% + $,30 ($10 000+ to $100 000)</option><option value="2.4||.30">2,4% + $,30 ($100 000+)</option></optgroup></select>';

     data_array['SD'] = '<select class="tool_inp_sty px-3 w-100 bg_383b3d" id="fee"><optgroup label="Domestic"><option value="3.4||.30" selected="">3.4% + $.30</option></optgroup><optgroup label="International"><option value="4.4||.30">4.4% + $.30</option></optgroup></select>';

     data_array['SB'] = '<select class="tool_inp_sty px-3 w-100 bg_383b3d" id="fee"><optgroup label="Domestic"><option value="3.4||.30" selected="">3.4% + $.30</option></optgroup><optgroup label="International"><option value="4.4||.30">4.4% + $.30 (USA, Canada, Northern Europe, Europe I)</option><option value="5.4||.30">5.4% + $.30 (All other countries)</option></optgroup></select>';

     data_array['SG'] = '<select class="tool_inp_sty px-3 w-100 bg_383b3d" id="fee"><optgroup label="Domestic"><option value="3.9||.50" selected="">3.9% + $.50 SGD</option></optgroup><optgroup label="International"><option value="4.4||.50">4.4% + $.50 SGD</option></optgroup></select>';

     data_array['SV'] = '<select class="tool_inp_sty px-3 w-100 bg_383b3d" id="fee"><optgroup label="Domestic"><option value="2.4||.35" selected="">3,4% + €,35 (€0 to €2500)</option><option value="2.9||.35">2,9% + €,35 (€2500+ to €10.000)</option><option value="2.7||.35">2,7% + €,35 (€10.000+ to €50.000)</option><option value="2.4||.35">2,4% + €,35 (€50.000+ to €100.000)</option><option value="1.9||.35">1,9% + €,35 (€100.000+)</option></optgroup></select>';

     data_array['SF'] = '<select class="tool_inp_sty px-3 w-100 bg_383b3d" id="fee"><optgroup label="Domestic"><option value="3.4||.30" selected="">3.4% + $.30 ($0 to $3000)</option><option value="2.9||.30">2.9% + $.30 ($3000+ to $10,000)</option><option value="2.7||.30">2.7% + $.30 ($10,000+ to $100,000)</option><option value="2.4||.30">2.4% + $.30 ($100,000+)</option></optgroup><optgroup label="Cross-border"><option value="3.9||.30">3.9% + $.30 ($0 to $3000)</option><option value="3.4||.30">3.4% + $.30 ($3000+ to $10,000)</option><option value="3.2||.30">3.2% + $.30 ($10,000+ to $100,000)</option><option value="2.9||.30">2.9% + $.30 ($100,000+)</option></optgroup></select>';

     data_array['SK'] = '<select class="tool_inp_sty px-3 w-100 bg_383b3d" id="fee"><optgroup label="Domestic"><option value="3.9||.30" selected="">3.9% + $.30</option></optgroup><optgroup label="International"><option value="4.4||.30">4.4% + $.30</option></optgroup></select>';

     data_array['SP'] = '<select class="tool_inp_sty px-3 w-100 bg_383b3d" id="fee"><optgroup label="Domestic"><option value="2.9||.35" selected="">2,9% + €,35</option></optgroup><optgroup label="International"><option value="3.4||.35">3,4% + €,35 (Europe I, Northern Europe)</option><option value="4.9||.35">4,9% + €,35 (Europe II, USA, Canada, Rest of World)</option></optgroup></select>';

     data_array['SR'] = '<select class="tool_inp_sty px-3 w-100 bg_383b3d" id="fee"><optgroup label="Domestic"><option value="3.4||.30" selected="">3.4% + $.30 ($0 to $3000)</option><option value="2.9||.30">2.9% + $.30 ($3000+ to $10,000)</option><option value="2.7||.30">2.7% + $.30 ($10,000+ to $100,000)</option><option value="2.4||.30">2.4% + $.30 ($100,000+)</option></optgroup><optgroup label="Cross-border"><option value="3.9||.30">3.9% + $.30 ($0 to $3000)</option><option value="3.4||.30">3.4% + $.30 ($3000+ to $10,000)</option><option value="3.2||.30">3.2% + $.30 ($10,000+ to $100,000)</option><option value="2.9||.30">2.9% + $.30 ($100,000+)</option></optgroup></select>';

     data_array['SW'] = '<select class="tool_inp_sty px-3 w-100 bg_383b3d" id="fee"><optgroup label="Domestic"><option value="3.4||3.25" selected="">3,4% + 3,25 kr (0 kr to 25 000 kr)</option><option value="2.9||3.25">2,9% + 3,25 kr (25 000+ kr to 100 000 kr)</option><option value="2.7||3.25">2,7% + 3,25 kr (100 000+ kr to 500 000 kr)</option><option value="2.4||3.25">2,4% + 3,25 kr (100 000+ kr to 500 000 kr)</option><option value="1.9||3.25">1,9% + 3,25 kr (1 000 000+ kr)</option></optgroup><optgroup label="Micropayment"><option value="5||.54">5% + ,54 kr</option></optgroup></select>';

     data_array['SZ'] = '<select class="tool_inp_sty px-3 w-100 bg_383b3d" id="fee"><optgroup label="Domestic"><option value="3.4||.55" selected="">3.4% + CHF 0.55 (up to CHF 4,000)</option><option value="2.9||.55">2.9% + CHF 0.55 (CHF 4,000.00 - CHF 16,000.00)</option><option value="2.7||.55">2.7% + CHF 0.55 (CHF 16,000.01 - CHF 80,000.00)</option><option value="2.4||.55">2.4% + CHF 0.55 (CHF 80,000.01 - CHF 160,000.00)</option><option value="1.9||.55">1.9% + CHF 0.55 (more than CHF 160,000.00)</option></optgroup><optgroup label="Cross-border"><option value="3.8||.55">3.8% + CHF 0.55 (from Northern Europe)</option><option value="3.9||.55">3.9% + CHF 0.55 (from Europe I)</option><option value="4.4||.55">4.4% + CHF 0.55 (from North America, Europe II)</option><option value="5.4||.55">5.4% + CHF 0.55 (from LATAM, APAC, Rest of World)</option></optgroup></select>';

     data_array['TW'] = '<select class="tool_inp_sty px-3 w-100 bg_383b3d" id="fee"><optgroup label="International - Website, invoice and email payments"><option value="4.4||.30" selected="">4.4% + $.30 ($0 to $3000)</option><option value="3.9||.30">3.9% + $.30 ($3000+ to $10,000)</option><option value="3.7||.30">3.7% + $.30 ($10,000+ to $100,000)</option><option value="3.4||.30">3.4% + $.30 ($100,000+)</option></optgroup><optgroup label="International - eBay payments"><option value="3.9||.30">3.9% + $.30 ($0 to $3000)</option><option value="3.4||.30">3.4% + $.30 ($3000+ to $10,000)</option><option value="3.2||.30">3.2% + $.30 ($10,000+ to $100,000)</option><option value="2.9||.30">2.9% + $.30 ($100,000+)</option></optgroup></select>';

     data_array['TH'] = '<select class="tool_inp_sty px-3 w-100 bg_383b3d" id="fee"><optgroup label="Domestic"><option value="3.9||11" selected="">3.9% + ฿11</option></optgroup><optgroup label="International"><option value="4.4||11">4.4% + ฿11</option></optgroup></select>';

     data_array['TR'] = '<select class="tool_inp_sty px-3 w-100 bg_383b3d" id="fee"><optgroup label="Domestic"><option value="3.4||.45" selected="">3,4% + ,45 TL (0 TL to 4500 TL)</option><option value="2.9||.45">2,9% + ,45 TL (4500+ TL to 15.000 TL)</option><option value="2.7||.45">2,7% + ,45 TL (15.000+ TL to 150.000 TL)</option><option value="2.4||.45">2,4% + ,45 TL (150.000+ TL)</option></optgroup><optgroup label="Micropayment"><option value="5||8">5% + 8 kuruş</option></optgroup></select>';

     data_array['UA'] = '<select class="tool_inp_sty px-3 w-100 bg_383b3d" id="fee"><optgroup label="Domestic"><option value="3.4||.30" selected="">3.4% + $.30</option></optgroup><optgroup label="International"><option value="4.4||.30">4.4% + $.30</option></optgroup></select>';

     data_array['VZ'] = '<select class="tool_inp_sty px-3 w-100 bg_383b3d" id="fee"><optgroup label="Domestic and International"><option value="5.4||.30" selected="">5.4% + $.30 ($0 to $3000)</option><option value="4.9||.30">4.9% + $.30 ($3000+ to $10,000)</option><option value="4.7||.30">4.7% + $.30 ($10,000+ to $100,000)</option><option value="4.4||.30">4.4% + $.30 ($100,000+)</option></optgroup><optgroup label="Micropayment"><option value="6.5||.05">6.5% + $.05</option></optgroup></select>';

     data_array['VT'] = '<select class="tool_inp_sty px-3 w-100 bg_383b3d" id="fee"><optgroup label="Domestic"><option value="3.9||.30" selected="">3.9% + $.30</option></optgroup><optgroup label="International"><option value="4.4||.30">4.4% + $.30</option></optgroup></select>';

     $('#currency').change(function(){
         var current_value = $('#currency :selected').val();
         $('.after_append').html('');
         $('.after_append').html(data_array[current_value]);
         check_currency(current_value);
     });
     $('#currency').trigger('change');

     function numberWithCommas(x) {
          return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
     }

     function check_currency(crncy){
          var curentCurrency = '$';
          var c_1 = ["USA", "AUD", "AR", "CA", "CHI", "CB", "CR", "GT", "ID", "MN", "MR", "PR", "RU", "SD", "SB", "SF", "SK", "SR", "TW", "UA", "VZ", "VT"];
          var c_2 = ["BG", "BL", "NL", "PT", "RO", "SV", "SP"];
          var c_3 = ["CH", "CY", "FN", "FR", "GR", "GC", "IR", "IT", "LT", "LU", "MT", "UK"];
          var ccc  = {CZ:'CZK', DK:'DKK', HK:'HKD', HU:'HUF', IN:'INR', IS:'₪', JP:'¥', MY:'MYR', MX:'MXN', NZ:'NZD', NO:'NOK', PH:'₱', PL:'zł', SG:'SGD', SW:'SEK', SZ:'CHF', TH:'THB', TR:'TRY'}

          if(jQuery.inArray(crncy, c_1) !== -1){
               curentCurrency = '$';
          }else if(jQuery.inArray(crncy, c_2) !== -1){
               curentCurrency = '€';
          }else if(jQuery.inArray(crncy, c_3) !== -1){
               curentCurrency = '£';
          }else if(ccc[crncy]){
               curentCurrency = ccc[crncy];
          }

          $('#currencySign').text(curentCurrency);
          $('.cSign').text(curentCurrency);
          
     }

     function calculate_fee(amount, currency, value1 = '', value2 = '' ){
          var curncySign = '$';
          var fee = ((value1/100)*amount)+value2;
          var total_deduct = fee.toFixed(2);
          // var total_deduct = fee;
          var receive = amount-total_deduct;
          var receive = receive.toFixed(2);
          var r = (100-value1)/100;
          var q = (amount+value2)/r;
          var i = q.toFixed(2);
          $('#total_fee').text(numberWithCommas(total_deduct));
          $('#recieve_fee').text(numberWithCommas(receive));
          $('#ask_for').text(numberWithCommas(i));
          $('#invoice').text(numberWithCommas(amount));
          $('#need').text(numberWithCommas(amount));
          $('.rndc_res_area').show();
          check_currency(currency);
            
          
               
     }

     $('#calculate').click(function(event) {
          if($('#amount').val() == ""){
               new_error_message(NEW_ERROR_MESSAGE,'error','Please enter an amount');
               // alert('Please enter an amount');
               return false;
          }
          event.preventDefault();
          var Amount = parseFloat($('#amount').val());
          var FeeRate = $('#fee :selected').val();
          var currency = $('#currency :selected').val();
          var FeeValueArr = FeeRate.split("||");
          var FeeValue1 = parseFloat(FeeValueArr[0]);
          var FeeValue2 = parseFloat(FeeValueArr[1]);
          calculate_fee(Amount,currency,FeeValue1,FeeValue2);
     });
     $('#reset').click(function(event) {
         event.preventDefault();
         $('#amount').val("");
         $('#total_fee').text("$0");
         $('#recieve_fee').text("$0");
         $('#ask_for').text("$0");
         $('#invoice').text("If you invoice for $0");
         $('#need').text("If you need $0");
         $('#currency').val('USA');
         $('#fee_bl').val('0');
         $('.after_append').html('');
         $('.after_append').html(data_array['USA']);
         //console.log("clicked");
     });
// </script>