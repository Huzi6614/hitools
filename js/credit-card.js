




var americanexpress ,mix_cards, atm_card, chjones_duet, unionpay, cabal, carnet, cirrus, discover, dinacard, diners_club_international, eftpos, fuel_card, globalbc, jcb, localbrand, loyaltycard, mastercard, nspkmir, private_label_card, private_label, rupay, troy, uatp, unionpayed, visa, visa_dankort;    
$("#advcardBrand").change(function(){
    var cardBrand = $("#advcardBrand").val();
    if(cardBrand == 'americanExpress'){
        $("#advcountry").html(americanexpress);
    }else if(cardBrand == 'Aura' ||  cardBrand == 'Elo' || cardBrand == 'Hipercard' || cardBrand == 'Ourocard' || cardBrand == 'Sodexo'){
        $("#advcountry").html(mix_cards);
    }else if(cardBrand == 'Chjones-Fuel-Card' || cardBrand == 'Duet' || cardBrand == 'Ge-Capital' || cardBrand == 'Hrg-Store-Card' || cardBrand == 'Newday' || cardBrand == 'Phh-Fuel-Card' || cardBrand == 'Red-Fuel-Card' || cardBrand == 'Rbs-Gift-Card' || cardBrand == 'Red-Liquid-Fuel-Card' || cardBrand == 'Uk-Fuel-Card'){
        $("#advcountry").html(chjones_duet);
    }else if(cardBrand == 'China-Unionpay'){
        $("#advcountry").html(unionpay);
    }else if(cardBrand == 'Cabal' || cardBrand == 'Local-Card'){
        $("#advcountry").html(cabal);
    }else if(cardBrand == 'Carnet'){
        $("#advcountry").html(carnet);
    }else if(cardBrand == 'Cirrus'){
        $("#advcountry").html(cirrus);
    }else if(cardBrand == 'discover'){
        $("#advcountry").html(discover);
    }else if(cardBrand == 'Atm-Card'){
        $("#advcountry").html(atm_card);
    }else if(cardBrand == 'Dinacard'){
        $("#advcountry").html(dinacard);
    }else if(cardBrand == 'dinersclubinternational'){
        $("#advcountry").html(diners_club_international);
    }else if(cardBrand == 'Eftpos'){
        $("#advcountry").html(eftpos);
    }else if(cardBrand == 'Fuel-Card'){
        $("#advcountry").html(fuel_card);
    }else if(cardBrand == 'Global-Bc'){
        $("#advcountry").html(globalbc);
    }else if(cardBrand == 'jcb'){
        $("#advcountry").html(jcb);
    }else if(cardBrand == 'Local-Brand'){
        $("#advcountry").html(localbrand);
    }else if(cardBrand == 'Loyalty-Card'){
        $("#advcountry").html(loyaltycard);
    }else if(cardBrand == 'mastercard' || cardBrand == 'Maestro'){
        $("#advcountry").html(mastercard);
    }else if(cardBrand == 'Nspk-Mir' || cardBrand == 'Sbercard'){
        $("#advcountry").html(nspkmir);
    }else if(cardBrand == 'Private-Label-Card'){
        $("#advcountry").html(private_label_card);
    }else if(cardBrand == 'Private-Label'){
        $("#advcountry").html(private_label);
    }else if(cardBrand == 'Rupay'){
        $("#advcountry").html(rupay);
    }else if(cardBrand == 'Troy'){
        $("#advcountry").html(troy);
    }else if(cardBrand == 'Uatp'){
        $("#advcountry").html(uatp);
    }else if(cardBrand == 'Unionpay'){
        $("#advcountry").html(unionpayed);
    }else if(cardBrand == 'visa'){
        $("#advcountry").html(visa);
    }else if(cardBrand == 'Visa-Dankort'){
        $("#advcountry").html(visa_dankort);
    }
});

$('#advcountry').on('change',function(){
    var country = $('#advcountry').val();
    if (country.length === 0 ) {
        $('#advBank').html('<option value="">Select a Country first</option>');
        alert('Please select a valid country name from dropdown.');
        return false;
    }
    let countryBanks = banks[country];

    if(countryBanks.length > 0){
        $('#advBank').html('');
        $('#advBank').append('<option value="">Select Bank</option>');
        countryBanks.forEach(function(country) {
            $('#advBank').append('<option value="' + country + '">' + country + '</option>');
        });
    }else{
        show_messages('error', 'Please select a valid country name from dropdown.');
    }
    // $('#advBank').html(obj.banks);
})


americanexpress =+'<option value="Albania">Albania</option>'+
        '<option value="American Samoa">American Samoa</option>'+
        '<option value="Andorra">Andorra</option>'+
        '<option value="Argentina">Argentina</option>'+
        '<option value="Armenia">Armenia</option>'+
        '<option value="Australia">Australia</option>'+
        '<option value="Austria">Austria</option>'+
        '<option value="Azerbaijan">Azerbaijan</option>'+
        '<option value="Bahrain">Bahrain</option>'+
        '<option value="Bangladesh">Bangladesh</option>'+
        '<option value="Belarus">Belarus</option>'+
        '<option value="Belgium">Belgium</option>'+
        '<option value="Bosnia">Bosnia And Herzegovina</option>'+
        '<option value="Brazil">Brazil</option>'+
        '<option value="Brunei Darussalam">Brunei Darussalam</option>'+
        '<option value="Bulgaria">Bulgaria</option>'+
        '<option value="Cambodia">Cambodia</option>'+
        '<option value="Canada">Canada</option>'+
        '<option value="Chile">Chile</option>'+
        '<option value="China">China</option>'+
        '<option value="Colombia">Colombia</option>'+
        '<option value="Costa Rica">Costa Rica</option>'+
        '<option value="Croatia">Croatia</option>'+
        '<option value="Cyprus">Cyprus</option>'+
        '<option value="Czech Republic">Czech Republic</option>'+
        '<option value="Denmark">Denmark</option>'+
        '<option value="Dominican">Dominican Republic</option>'+
        '<option value="Ecuador">Ecuador</option>'+
        '<option value="Egypt">Egypt</option>'+
        '<option value="El Salvador">El Salvador</option>'+
        '<option value="Ethiopia">Ethiopia</option>'+
        '<option value="Fiji">Fiji</option>'+
        '<option value="Finland">Finland</option>'+
        '<option value="France">France</option>'+
        '<option value="Georgia">Georgia</option>'+
        '<option value="Germany">Germany</option>'+
        '<option value="Ghana">Ghana</option>'+
        '<option value="Greece">Greece</option>'+
        '<option value="Honduras">Honduras</option>'+
        '<option value="Hong Kong">Hong Kong</option>'+
        '<option value="Hungary">Hungary</option>'+
        '<option value="Iceland">Iceland</option>'+
        '<option value="India">India</option>'+
        '<option value="Indonesia">Indonesia</option>'+
        '<option value="Ireland">Ireland</option>'+
        '<option value="Israel">Israel</option>'+
        '<option value="Italy">Italy</option>'+
        '<option value="Jamaica">Jamaica</option>'+
        '<option value="Japan">Japan</option>'+
        '<option value="Jordan">Jordan</option>'+
        '<option value="Kazakhstan">Kazakhstan</option>'+
        '<option value="Kenya">Kenya</option>'+
        '<option value="Korea">Korea</option>'+
        '<option value="Latvia">Latvia</option>'+
        '<option value="Lebanon">Lebanon</option>'+
        '<option value="Lithuania">Lithuania</option>'+
        '<option value="Luxembourg">Luxembourg</option>'+
        '<option value="Macao">Macao</option>'+
        '<option value="Macedonia">Macedonia, The Former Yugoslav Republic Of</option>'+
        '<option value="Malaysia">Malaysia</option>'+
        '<option value="Malta">Malta</option>'+
        '<option value="Mauritius">Mauritius</option>'+
        '<option value="Mexico">Mexico</option>'+
        '<option value="Moldova">Moldova, Republic Of</option>'+
        '<option value="Mongolia">Mongolia</option>'+
        '<option value="Morocco">Morocco</option>'+
        '<option value="Nepal">Nepal</option>'+
        '<option value="Netherlands">Netherlands</option>'+
        '<option value="Netherlands Antilles">Netherlands Antilles</option>'+
        '<option value="New Zealand">New Zealand</option>'+
        '<option value="Nicaragua">Nicaragua</option>'+
        '<option value="Nigeria">Nigeria</option>'+
        '<option value="Norway">Norway</option>'+
        '<option value="Pakistan">Pakistan</option>'+
        '<option value="Papua New Guinea">Papua New Guinea</option>'+
        '<option value="Paraguay">Paraguay</option>'+
        '<option value="Peru">Peru</option>'+
        '<option value="Philippines">Philippines</option>'+
        '<option value="Poland">Poland</option>'+
        '<option value="Portugal">Portugal</option>'+
        '<option value="Romania">Romania</option>'+
        '<option value="Russia">Russian Federation</option>'+
        '<option value="Saudi Arababia</option>'+
        '<option value="Serbia">Serbia</option>'+
        '<option value="Singapore">Singapore</option>'+
        '<option value="Slovakia">Slovakia</option>'+
        '<option value="Slovenia">Slovenia</option>'+
        '<option value="Solomon Islands">Solomon Islands</option>'+
        '<option value="South Africa">South Africa</option>'+
        '<option value="Spain">Spain</option>'+
        '<option value="Sri Lanka">Sri Lanka</option>'+
        '<option value="Switzerland">Switzerland</option>'+
        '<option value="Taiwan">Taiwan</option>'+
        '<option value="Thailand">Thailand</option>'+
        '<option value="Tonga">Tonga</option>'+
        '<option value="Tunisia">Tunisia</option>'+
        '<option value="Turkey">Turkey</option>'+
        '<option value="Ukraine">Ukraine</option>'+
        '<option value="United Kingdom">United Kingdom</option>'+
        '<option value="United States">United States</option>'+
        '<option value="Uruguay">Uruguay</option>'+
        '<option value="Vanuatu">Vanuatu</option>'+
        '<option value="Venezuela">Venezuela, Bolivarian Republic Of</option>'+
        '<option value="Vietnam">Vietnam</option>';
    
    mix_cards +='<option value="">Select Country</option>'+
            '<option value="Brazil">Brazil</option>';

    atm_card +='<option value="">Select Country</option>'+
            '<option value="China">China</option>';

    chjones_duet +='<option value="">Select Country</option>'+
            '<option value="United Kingdom">United Kingdom</option>';

    unionpay +='<option value="">Select Country</option>'+
            '<option value="Argentina">Argentina</option>'+
            '<option value="Australia">Australia</option>'+
            '<option value="Azerbaijan">Azerbaijan</option>'+
            '<option value="Belgium">Belgium</option>'+
            '<option value="Brazil">Brazil</option>'+
            '<option value="Brunei Darussalam">Brunei Darussalam</option>'+
            '<option value="Bulgaria">Bulgaria</option>'+
            '<option value="Canada">Canada</option>'+
            '<option value="China">China</option>'+
            '<option value="Colombia">Colombia</option>'+
            '<option value="Egypt">Egypt</option>'+
            '<option value="France">France</option>'+
            '<option value="Germany">Germany</option>'+
            '<option value="Ghana">Ghana</option>'+
            '<option value="Hong Kong">Hong Kong</option>'+
            '<option value="India">India</option>'+
            '<option value="Indonesia">Indonesia</option>'+
            '<option value="Italy">Italy</option>'+
            '<option value="Jamaica">Jamaica</option>'+
            '<option value="Japan">Japan</option>'+
            '<option value="Jordan">Jordan</option>'+
            '<option value="Kazakhstan">Kazakhstan</option>'+
            '<option value="Kenya">Kenya</option>'+
            '<option value="Korea">Korea</option>'+
            '<option value="Luxembourg">Luxembourg</option>'+
            '<option value="Macao">Macao</option>'+
            '<option value="Malaysia">Malaysia</option>'+
            '<option value="Mongolia">Mongolia</option>'+
            '<option value="Nepal">Nepal</option>'+
            '<option value="Netherlands">Netherlands</option>'+
            '<option value="New Zealand">New Zealand</option>'+
            '<option value="Nigeria">Nigeria</option>'+
            '<option value="Pakistan">Pakistan</option>'+
            '<option value="Philippines">Philippines</option>'+
            '<option value="Russia">Russian Federation</option>'+
            '<option value="Singapore">Singapore</option>'+
            '<option value="South Africa">South Africa</option>'+
            '<option value="Spain">Spain</option>'+
            '<option value="Switzerland">Switzerland</option>'+
            '<option value="Thailand">Thailand</option>'+
            '<option value="Turkey">Turkey</option>'+
            '<option value="United Arab Emirates">United Arab Emirates</option>'+
            '<option value="United Kingdom">United Kingdom</option>'+
            '<option value="United States">United States</option>'+
            '<option value="Uzbekistan">Uzbekistan</option>'+
            '<option value="Venezuela">Venezuela, Bolivarian Republic Of</option>'+
            '<option value="Vietnam">Vietnam</option>';
    
    cabal +='<option value="">Select Country</option>'+
            '<option value="Argentina">Argentina</option>';

    carnet +='<option value="">Select Country</option>'+
            '<option value="Mexico">Mexico</option>';

    cirrus +='<option value="">Select Country</option>'+
            '<option value="Germany">Germany</option>'+
            '<option value="United Kingdom">United Kingdom</option>';

    discover +='<option value="">Select Country</option>'+
            '<option value="Brazil">Brazil</option>'+
            '<option value="Ecuador">Ecuador</option>'+
            '<option value="India">India</option>'+
            '<option value="Korea">Korea</option>'+
            '<option value="Philippines">Philippines</option>'+
            '<option value="Serbia">Serbia</option>'+
            '<option value="United States">United States</option>';

    dinacard +='<option value="">Select Country</option>'+
            '<option value="Serbia">Serbia</option>';

    diners_club_international+='<option value="">Select Country</option>'+
        '<option value="Algeria">Algeria</option>'+
        '<option value="Argentina">Argentina</option>'+
        '<option value="Australia">Australia</option>'+
        '<option value="Austria">Austria</option>'+
        '<option value="Bahrain">Bahrain</option>'+
        '<option value="Bangladesh">Bangladesh</option>'+
        '<option value="Belgium">Belgium</option>'+
        '<option value="Belize">Belize</option>'+
        '<option value="Bolivia">Bolivia, Plurinational State Of</option>'+
        '<option value="Bosnia">Bosnia And Herzegovina</option>'+
        '<option value="Brazil">Brazil</option>'+
        '<option value="Bulgaria">Bulgaria</option>'+
        '<option value="Cameroon">Cameroon</option>'+
        '<option value="Canada">Canada</option>'+
        '<option value="Chile">Chile</option>'+
        '<option value="China">China</option>'+
        '<option value="Colombia">Colombia</option>'+
        '<option value="Costa Rica">Costa Rica</option>'+
        '<option value="Croatia">Croatia</option>'+
        '<option value="Cyprus">Cyprus</option>'+
        '<option value="Czech Republic">Czech Republic</option>'+
        '<option value="Denmark">Denmark</option>'+
        '<option value="Dominican">Dominican Republic</option>'+
        '<option value="Ecuador">Ecuador</option>'+
        '<option value="Egypt">Egypt</option>'+
        '<option value="El Salvador">El Salvador</option>'+
        '<option value="Estonia">Estonia</option>'+
        '<option value="Fiji">Fiji</option>'+
        '<option value="Finland">Finland</option>'+
        '<option value="France">France</option>'+
        '<option value="Gambia">Gambia</option>'+
        '<option value="Georgia">Georgia</option>'+
        '<option value="Germany">Germany</option>'+
        '<option value="Ghana">Ghana</option>'+
        '<option value="Greece">Greece</option>'+
        '<option value="Hong Kong">Hong Kong</option>'+
        '<option value="Hungary">Hungary</option>'+
        '<option value="India">India</option>'+
        '<option value="Indonesia">Indonesia</option>'+
        '<option value="Ireland">Ireland</option>'+
        '<option value="Israel">Israel</option>'+
        '<option value="Italy">Italy</option>'+
        '<option value="Jamaica">Jamaica</option>'+
        '<option value="Japan">Japan</option>'+
        '<option value="Jordan">Jordan</option>'+
        '<option value="Korea">Korea</option>'+
        '<option value="Kuwait">Kuwait</option>'+
        '<option value="Latvia">Latvia</option>'+
        '<option value="Lebanon">Lebanon</option>'+
        '<option value="Lithuania">Lithuania</option>'+
        '<option value="Luxembourg">Luxembourg</option>'+
        '<option value="Macedonia">Macedonia, The Former Yugoslav Republic Of</option>'+
        '<option value="Malaysia">Malaysia</option>'+
        '<option value="Malta">Malta</option>'+
        '<option value="Mauritius">Mauritius</option>'+
        '<option value="Mexico">Mexico</option>'+
        '<option value="Moldova">Moldova, Republic Of</option>'+
        '<option value="Morocco">Morocco</option>'+
        '<option value="Netherlands">Netherlands</option>'+
        '<option value="New Zealand">New Zealand</option>'+
        '<option value="Nicaragua">Nicaragua</option>'+
        '<option value="Nigeria">Nigeria</option>'+
        '<option value="Norway">Norway</option>'+
        '<option value="Oman">Oman</option>'+
        '<option value="Pakistan">Pakistan</option>'+
        '<option value="Peru">Peru</option>'+
        '<option value="Philippines">Philippines</option>'+
        '<option value="Poland">Poland</option>'+
        '<option value="Portugal">Portugal</option>'+
        '<option value="Qatar">Qatar</option>'+
        '<option value="Romania">Romania</option>'+
        '<option value="Russia">Russian Federation</option>'+
        '<option value="Saudi Arabia">Saudi Arabia</option>'+
        '<option value="Serbia">Serbia</option>'+
        '<option value="Singapore">Singapore</option>'+
        '<option value="Slovakia">Slovakia</option>'+
        '<option value="Slovenia">Slovenia</option>'+
        '<option value="South Africa">South Africa</option>'+
        '<option value="Spain">Spain</option>'+
        '<option value="Switzerland">Switzerland</option>'+
        '<option value="Taiwan">Taiwan</option>'+
        '<option value="Thailand">Thailand</option>'+
        '<option value="Tunisia">Tunisia</option>'+
        '<option value="Turkey">Turkey</option>'+
        '<option value="Ukraine">Ukraine</option>'+
        '<option value="United Arab Emirates">United Arab Emirates</option>'+
        '<option value="United Kingdom">United Kingdom</option>'+
        '<option value="United States">United States</option>'+
        '<option value="Uruguay">Uruguay</option>'+
        '<option value="Venezuela">Venezuela, Bolivarian Republic Of</option>'+
        '<option value="Vietnam">Vietnam</option>';

    eftpos +='<option value="">Select Country</option>'+
            '<option value="Australia">Australia</option>';

    fuel_card +='<option value="">Select Country</option>'+
            '<option value="Australia">Australia</option>'+
            '<option value="Denmark">Denmark</option>';

    globalbc +='<option value="">Select Country</option>'+
            '<option value="Korea">Korea</option>'; 

    jcb +='<option value="">Select Country</option>'+
            '<option value="Austria">Austria</option>'+
            '<option value="Bahrain">Bahrain</option>'+
            '<option value="Bangladesh">Bangladesh</option>'+
            '<option value="Brazil">Brazil</option>'+
            '<option value="Bulgaria">Bulgaria</option>'+
            '<option value="China">China</option>'+
            '<option value="Germany">Germany</option>'+
            '<option value="Hong Kong">Hong Kong</option>'+
            '<option value="Indonesia">Indonesia</option>'+
            '<option value="Japan">Japan</option>'+
            '<option value="Korea">Korea</option>'+
            '<option value="Lebanon">Lebanon</option>'+
            '<option value="Mongolia">Mongolia</option>'+
            '<option value="Myanmar">Myanmar</option>'+
            '<option value="Pakistan">Pakistan</option>'+
            '<option value="Philippines">Philippines</option>'+
            '<option value="Russia">Russian Federation</option>'+
            '<option value="Singapore">Singapore</option>'+
            '<option value="Spain">Spain</option>'+
            '<option value="Taiwan">Taiwan</option>'+
            '<option value="Thailand">Thailand</option>'+
            '<option value="United Arab Emirates">United Arab Emirates</option>'+
            '<option value="United States">United States</option>'+
            '<option value="Vietnam">Vietnam</option>';

    localbrand +='<option value="">Select Country</option>'+
            '<option value="Argentina">Argentina</option>'+
            '<option value="Australia">Australia</option>'+
            '<option value="Brazil">Brazil</option>'+
            '<option value="China">China</option>'+
            '<option value="India">India</option>'+
            '<option value="Korea">Korea</option>'+
            '<option value="Mongolia">Mongolia</option>';


    loyaltycard +='<option value="">Select Country</option>'+
            '<option value="Russia">Russian Federation</option>'+
            '<option value="United Kingdom">United Kingdom</option>';

    mastercard += '<option value="">Select Country</option>'+
            '<option value="Afghanistan">Afghanistan</option>'+
            '<option value="Albania">Albania</option>'+
            '<option value="Algeria">Algeria</option>'+
            '<option value="Andorra">Andorra</option>'+
            '<option value="Angola">Angola</option>'+
            '<option value="Antigua">Antigua and Barbuda</option>'+
            '<option value="Argentina">Argentina</option>'+
            '<option value="Armenia">Armenia</option>'+
            '<option value="Australia">Australia</option>'+
            '<option value="Austria">Austria</option>'+
            '<option value="Azerbaijan">Azerbaijan</option>'+
            '<option value="Bahamas">Bahamas</option>'+
            '<option value="Bahrain">Bahrain</option>'+
            '<option value="Bangladesh">Bangladesh</option>'+
            '<option value="Barbados">Barbados</option>'+
            '<option value="Belarus">Belarus</option>'+
            '<option value="Belgium">Belgium</option>'+
            '<option value="Belize">Belize</option>'+
            '<option value="Benin">Benin</option>'+
            '<option value="Bermuda">Bermuda</option>'+
            '<option value="Bhutan">Bhutan</option>'+
            '<option value="Bolivia">Bolivia, Plurinational State Of</option>'+
            '<option value="Bosnia">Bosnia And Herzegovina</option>'+
            '<option value="Botswana">Botswana</option>'+
            '<option value="Brazil">Brazil</option>'+
            '<option value="Brunei Darussalam">Brunei Darussalam</option>'+
            '<option value="Bulgaria">Bulgaria</option>'+
            '<option value="Burkina Faso">Burkina Faso</option>'+
            '<option value="Burundi">Burundi</option>'+
            '<option value="Cambodia">Cambodia</option>'+
            '<option value="Cameroon">Cameroon</option>'+
            '<option value="Canada">Canada</option>'+
            '<option value="Cayman">Cayman Islands</option>'+
            '<option value="Central African Republic">Central African Republic</option>'+
            '<option value="Chad">Chad</option>'+
            '<option value="Chile">Chile</option>'+
            '<option value="China">China</option>'+
            '<option value="Colombia">Colombia</option>'+
            '<option value="Comoros">Comoros</option>'+
            '<option value="Congo">Congo</option>'+

            '<option value="Costa Rica">Costa Rica</option>'+
            '<option value="Croatia">Croatia</option>'+
            '<option value="Cyprus">Cyprus</option>'+
            '<option value="Czech Republic">Czech Republic</option>'+
            '<option value="Denmark">Denmark</option>'+
            '<option value="Dominican">Dominican Republic</option>'+
            '<option value="Ecuador">Ecuador</option>'+
            '<option value="Egypt">Egypt</option>'+
            '<option value="El Salvador">El Salvador</option>'+
            '<option value="Equatorial Guinea">Equatorial Guinea</option>'+
            '<option value="Estonia">Estonia</option>'+
            '<option value="Ethiopia">Ethiopia</option>'+
            '<option value="Fiji">Fiji</option>'+
            '<option value="Finland">Finland</option>'+
            '<option value="France">France</option>'+
            '<option value="Gabon">Gabon</option>'+
            '<option value="Gambia">Gambia</option>'+
            '<option value="Georgia">Georgia</option>'+
            '<option value="Germany">Germany</option>'+
            '<option value="Ghana">Ghana</option>'+
            '<option value="Greece">Greece</option>'+
            '<option value="Guinea-Bissau">Guinea-Bissau</option>'+
            '<option value="Guyana">Guyana</option>'+
            '<option value="Haiti">Haiti</option>'+
            '<option value="Honduras">Honduras</option>'+
            '<option value="Hong Kong">Hong Kong</option>'+
            '<option value="Hungary">Hungary</option>'+
            '<option value="Iceland">Iceland</option>'+
            '<option value="India">India</option>'+
            '<option value="Indonesia">Indonesia</option>'+
            '<option value="Iran">Iran</option>'+
            '<option value="Iraq">Iraq</option>'+
            '<option value="Ireland">Ireland</option>'+
            '<option value="Israel">Israel</option>'+
            '<option value="Italy">Italy</option>'+
            '<option value="Jamaica">Jamaica</option>'+
            '<option value="Japan">Japan</option>'+
            '<option value="Jordan">Jordan</option>'+
            '<option value="Kazakhstan">Kazakhstan</option>'+
            '<option value="Kenya">Kenya</option>'+
            '<option value="Korea">Korea</option>'+
            '<option value="Kuwait">Kuwait</option>'+
            '<option value="Kyrgyzstan">Kyrgyzstan</option>'+
            '<option value="Latvia">Latvia</option>'+
            '<option value="Lebanon">Lebanon</option>'+
            '<option value="Lesotho">Lesotho</option>'+
            '<option value="Liberia">Liberia</option>'+
            '<option value="Libya">Libya</option>'+
            '<option value="Lithuania">Lithuania</option>'+
            '<option value="Luxembourg">Luxembourg</option>'+
            '<option value="Macao">Macao</option>'+
            '<option value="Macedonia">Macedonia, The Former Yugoslav Republic Of</option>'+
            '<option value="Madagascar">Madagascar</option>'+
            '<option value="Malawi">Malawi</option>'+
            '<option value="Malaysia">Malaysia</option>'+
            '<option value="Malta">Malta</option>'+
            '<option value="Mauritius">Mauritius</option>'+
            '<option value="Mexico">Mexico</option>'+
            '<option value="Moldova">Moldova, Republic Of</option>'+
            '<option value="Mongolia">Mongolia</option>'+
            '<option value="Morocco">Morocco</option>'+
            '<option value="Mozambique">Mozambique</option>'+
            '<option value="Myanmar">Myanmar</option>'+
            '<option value="Namibia">Namibia</option>'+
            '<option value="Nepal">Nepal</option>'+
            '<option value="Netherlands">Netherlands</option>'+
            '<option value="New Zealand">New Zealand</option>'+
            '<option value="Nicaragua">Nicaragua</option>'+
            '<option value="Niger">Niger</option>'+
            '<option value="Nigeria">Nigeria</option>'+
            '<option value="Norway">Norway</option>'+
            '<option value="Oman">Oman</option>'+
            '<option value="Pakistan">Pakistan</option>'+
            '<option value="Papua New Guinea">Papua New Guinea</option>'+
            '<option value="Paraguay">Paraguay</option>'+
            '<option value="Peru">Peru</option>'+
            '<option value="Philippines">Philippines</option>'+
            '<option value="Poland">Poland</option>'+
            '<option value="Portugal">Portugal</option>'+
            '<option value="Qatar">Qatar</option>'+
            '<option value="Reunion">Reunion</option>'+
            '<option value="Romanioption>'+
            '<option value="Russia">Russian Federation</option>'+
            '<option value="Rwanda">Rwanda</option>'+
            '<option value="Samoa">Samoa</option>'+
            '<option value="San Marino">San Marino</option>'+
            '<option value="Saudi Arabia">Saudi Arabia</option>'+
            '<option value="Senegal">Senegal</option>'+
            '<option value="Serbia">Serbia</option>'+
            '<option value="Seychelles">Seychelles</option>'+
            '<option value="Sierra Leone">Sierra Leone</option>'+
            '<option value="Singapore">Singapore</option>'+
            '<option value="Slovakia">Slovakia</option>'+
            '<option value="Slovenia">Slovenia</option>'+
            '<option value="Solomon Islands">Solomon Islands</option>'+
            '<option value="Somalia">Somalia</option>'+
            '<option value="South Africa">South Africa</option>'+
            '<option value="Spain">Spain</option>'+
            '<option value="Sri Lanka">Sri Lanka</option>'+
            '<option value="Suriname">Suriname</option>'+
            '<option value="Swaziland">Swaziland</option>'+
            '<option value="Switzerland">Switzerland</option>'+
            '<option value="Taiwan">Taiwan</option>'+
            '<option value="Tajikistan">Tajikistan</option>'+
            '<option value="Tanzania">Tanzania, United Republic Of</option>'+
            '<option value="Thailand">Thailand</option>'+
            '<option value="Togo">Togo</option>'+
            '<option value="Tonga">Tonga</option>'+
            '<option value="Trinidad">Trinidad And Tobago</option>'+
            '<option value="Tunisia">Tunisia</option>'+
            '<option value="Turkey">Turkey</option>'+
            '<option value="Uganda">Uganda</option>'+
            '<option value="Ukraine">Ukraine</option>'+
            '<option value="United Arab Emirates">United Arab Emirates</option>'+
            '<option value="United Kingdom">United Kingdom</option>'+
            '<option value="United States">United States</option>'+
            '<option value="Uruguay">Uruguay</option>'+
            '<option value="Uzbekistan">Uzbekistan</option>'+
            '<option value="Vanuatu">Vanuatu</option>'+
            '<option value="Venezuela">Venezuela, Bolivarian Republic Of</option>'+
            '<option value="Vietnam">Vietnam</option>'+
            '<option value="Virgin Islands">Virgin Islands, British</option>'+
            '<option value="Virgin Islands US">Virgin Islands, U.S.</option>'+
            '<option value="Yemen">Yemen</option>'+
            '<option value="Zambia">Zambia</option>'+
            '<option value="Zimbabwe">Zimbabwe</option>';

    nspkmir +='<option value="">Select Country</option>'+
            '<option value="Russia">Russian Federation</option>';

    private_label_card +='<option value="">Select Country</option>'+
                    '<option value="Albania">Albania</option>'+
                    '<option value="Argentina">Argentina</option>'+
                    '<option value="Australia">Australia</option>'+
                    '<option value="Austria">Austria</option>'+
                    '<option value="Brazil">Brazil</option>'+
                    '<option value="Bulgaria">Bulgaria</option>'+
                    '<option value="Canada">Canada</option>'+
                    '<option value="China">China</option>'+
                    '<option value="Colombia">Colombia</option>'+
                    '<option value="Egypt">Egypt</option>'+
                    '<option value="Estonia">Estonia</option>'+
                    '<option value="Finland">Finland</option>'+
                    '<option value="France">France</option>'+
                    '<option value="Germany">Germany</option>'+
                    '<option value="Hungary">Hungary</option>'+
                    '<option value="India">India</option>'+
                    '<option value="Indonesia">Indonesia</option>'+
                    '<option value="Israel">Israel</option>'+
                    '<option value="Italy">Italy</option>'+
                    '<option value="Japan">Japan</option>'+
                    '<option value="Kuwait">Kuwait</option>'+
                    '<option value="Lithuania">Lithuania</option>'+
                    '<option value="Luxembourg">Luxembourg</option>'+
                    '<option value="Malaysia">Malaysia</option>'+
                    '<option value="Mexico">Mexico</option>'+
                    '<option value="Morocco">Morocco</option>'+
                    '<option value="Netherlands">Netherlands</option>'+
                    '<option value="Poland">Poland</option>'+
                    '<option value="Romania">Romania</option>'+
                    '<option value="Russia">Russian Federation</option>'+
                    '<option value="Singapore">Singapore</option>'+
                    '<option value="South Africa">South Africa</option>'+
                    '<option value="Turkey">Turkey</option>'+
                    '<option value="Ukraine">Ukraine</option>'+
                    '<option value="United Kingdom">United Kingdom</option>'+
                    '<option value="United States">United States</option>';

    private_label +='<option value="">Select Country</option>'+
            '<option value="Algeria">Algeria</option>'+
            '<option value="Andorra">Andorra</option>'+
            '<option value="Argentina">Argentina</option>'+
            '<option value="Armenia">Armenia</option>'+
            '<option value="Australia">Australia</option>'+
            '<option value="Bangladesh">Bangladesh</option>'+
            '<option value="Belarus">Belarus</option>'+
            '<option value="Belgium">Belgium</option>'+
            '<option value="Brazil">Brazil</option>'+
            '<option value="Bulgaria">Bulgaria</option>'+
            '<option value="Canada">Canada</option>'+
            '<option value="Chile">Chile</option>'+
            '<option value="China">China</option>'+
            '<option value="Colombia">Colombia</option>'+
            '<option value="Costa Rica">Costa Rica</option>'+
            '<option value="Czech Republic">Czech Republic</option>'+
            '<option value="Denmark">Denmark</option>'+
            '<option value="Dominican">Dominican Republic</option>'+
            '<option value="Egypt">Egypt</option>'+
            '<option value="Estonia">Estonia</option>'+
            '<option value="Finland">Finland</option>'+
            '<option value="France">France</option>'+
            '<option value="Gambia">Gambia</option>'+
            '<option value="Germany">Germany</option>'+
            '<option value="Greece">Greece</option>'+
            '<option value="Hong Kong">Hong Kong</option>'+
            '<option value="Hungary">Hungary</option>'+
            '<option value="India">India</option>'+
            '<option value="Indonesia">Indonesia</option>'+
            '<option value="Iran">Iran</option>'+
            '<option value="Italy">Italy</option>'+
            '<option value="Jamaica">Jamaica</option>'+
            '<option value="Japan">Japan</option>'+
            '<option value="Korea">Korea</option>'+
            '<option value="Macedonia">Macedonia, The Former Yugoslav Republic Of</option>'+
            '<option value="Malaysia">Malaysia</option>'+
            '<option value="Mexico">Mexico</option>'+
            '<option value="Moldova">Moldova, Republic Of</option>'+
            '<option value="Morocco">Morocco</option>'+
            '<option value="Nigeria">Nigeria</option>'+
            '<option value="Norway">Norway</option>'+
            '<option value="Oman">Oman</option>'+
            '<option value="Peru">Peru</option>'+
            '<option value="Philippines">Philippines</option>'+
            '<option value="Poland">Poland</option>'+
            '<option value="Portugal">Portugal</option>'+
            '<option value="Qatar">Qatar</option>'+
            '<option value="Romania">Romania</option>'+
            '<option value="Russia">Russian Federation</option>'+
            '<option value="Saudi Arabia">Saudi Arabia</option>'+
            '<option value="Singapore">Singapore</option>'+
            '<option value="South Africa">South Africa</option>'+
            '<option value="Spain">Spain</option>'+
            '<option value="Switzerland">Switzerland</option>'+
            '<option value="Thailand">Thailand</option>'+
            '<option value="Turkey">Turkey</option>'+
            '<option value="Uganda">Uganda</option>'+
            '<option value="Ukraine">Ukraine</option>'+
            '<option value="United Arab Emirates">United Arab Emirates</option>'+
            '<option value="United Kingdom">United Kingdom</option>'+
            '<option value="United States">United States</option>'+
            '<option value="Uruguay">Uruguay</option>'+
            '<option value="Venezuela">Venezuela, Bolivarian Republic Of</option>'+
            '<option value="Vietnam">Vietnam</option>';

    rupay +='<option value="">Select Country</option>'+
            '<option value="India">India</option>';

    troy +='<option value="">Select Country</option>'+
            '<option value="Turkey">Turkey</option>';

    uatp += '<option value="">Select Country</option>'+
            '<option value="Australia">Australia</option>'+
            '<option value="Brazil">Brazil</option>'+
            '<option value="China">China</option>'+
            '<option value="Finland">Finland</option>'+
            '<option value="Germany">Germany</option>'+
            '<option value="Ireland">Ireland</option>'+
            '<option value="Israel">Israel</option>'+
            '<option value="Japan">Japan</option>'+
            '<option value="Malaysia">Malaysia</option>'+
            '<option value="Mexico">Mexico</option>'+
            '<option value="New Zealand">New Zealand</option>'+
            '<option value="Qatar">Qatar</option>'+
            '<option value="Saudi Arabia">Saudi Arabia</option>'+
            '<option value="Spain">Spain</option>'+
            '<option value="Turkey">Turkey</option>'+
            '<option value="United Arab Emirates">United Arab Emirates</option>'+
            '<option value="United Kingdom">United Kingdom</option>'+
            '<option value="United States">United States</option>';

    unionpayed +='<option value="">Select Country</option>'+
            '<option value="Azerbaijan">Azerbaijan</option>'+
            '<option value="China">China</option>'+
            '<option value="France">France</option>'+
            '<option value="Malaysia">Malaysia</option>'+
            '<option value="United Arab Emirates">United Arab Emirates</option>';

    visa +='<option value="">Select Country</option>'+
            '<option value="Afghanistan">Afghanistan</option>'+
            '<option value="Albania">Albania</option>'+
            '<option value="Algeria">Algeria</option>'+
            '<option value="Andorra">Andorra</option>'+
            '<option value="Angola">Angola</option>'+
            '<option value="Antigua">Antigua and Barbuda</option>'+
            '<option value="Argentina">Argentina</option>'+
            '<option value="Armenia">Armenia</option>'+
            '<option value="Australia">Australia</option>'+
            '<option value="Austria">Austria</option>'+
            '<option value="Azerbaijan">Azerbaijan</option>'+
            '<option value="Bahamas">Bahamas</option>'+
            '<option value="Bahrain">Bahrain</option>'+
            '<option value="Bangladesh">Bangladesh</option>'+
            '<option value="Barbados">Barbados</option>'+
            '<option value="Belarus">Belarus</option>'+
            '<option value="Belgium">Belgium</option>'+
            '<option value="Belize">Belize</option>'+
            '<option value="Benin">Benin</option>'+
            '<option value="Bermuda">Bermuda</option>'+
            '<option value="Bhutan">Bhutan</option>'+
            '<option value="Bolivia">Bolivia, Plurinational State Of</option>'+
            '<option value="Bosnia">Bosnia And Herzegovina</option>'+
            '<option value="Botswana">Botswana</option>'+
            '<option value="Brazil">Brazil</option>'+
            '<option value="Brunei Darussalam">Brunei Darussalam</option>'+
            '<option value="Bulgaria">Bulgaria</option>'+
            '<option value="Burkina Faso">Burkina Faso</option>'+
            '<option value="Burundi">Burundi</option>'+
            '<option value="Cambodia">Cambodia</option>'+
            '<option value="Cameroon">Cameroon</option>'+
            '<option value="Canada">Canada</option>'+
            '<option value="Cayman">Cayman Islands</option>'+
            '<option value="Central African Republic">Central African Republic</option>'+
            '<option value="Chad">Chad</option>'+
            '<option value="Chile">Chile</option>'+
            '<option value="China">China</option>'+
            '<option value="Colombia">Colombia</option>'+
            '<option value="Comoros">Comoros</option>'+
            '<option value="Congo">Congo</option>'+

            '<option value="Costa Rica">Costa Rica</option>'+
            '<option value="Croatia">Croatia</option>'+
            '<option value="Cyprus">Cyprus</option>'+
            '<option value="Czech Republic">Czech Republic</option>'+
            '<option value="Denmark">Denmark</option>'+
            '<option value="Dominican">Dominican Republic</option>'+
            '<option value="Ecuador">Ecuador</option>'+
            '<option value="Egypt">Egypt</option>'+
            '<option value="El Salvador">El Salvador</option>'+
            '<option value="Equatorial Guinea">Equatorial Guinea</option>'+
            '<option value="Ethiopia">Ethiopia</option>'+
            '<option value="Fiji">Fiji</option>'+
            '<option value="Finland">Finland</option>'+
            '<option value="France">France</option>'+
            '<option value="Gabon">Gabon</option>'+
            '<option value="Gambia">Gambia</option>'+
            '<option value="Georgia">Georgia</option>'+
            '<option value="Germany">Germany</option>'+
            '<option value="Ghana">Ghana</option>'+
            '<option value="Greece">Greece</option>'+
            '<option value="Guinea-Bissau">Guinea-Bissau</option>'+
            '<option value="Guyana">Guyana</option>'+
            '<option value="Haiti">Haiti</option>'+
            '<option value="Honduras">Honduras</option>'+
            '<option value="Hong Kong">Hong Kong</option>'+
            '<option value="Hungary">Hungary</option>'+
            '<option value="Iceland">Iceland</option>'+
            '<option value="India">India</option>'+
            '<option value="Indonesia">Indonesia</option>'+
            '<option value="Iran">Iran</option>'+
            '<option value="Iraq">Iraq</option>'+
            '<option value="Ireland">Ireland</option>'+
            '<option value="Israel">Israel</option>'+
            '<option value="Italy">Italy</option>'+
            '<option value="Jamaica">Jamaica</option>'+
            '<option value="Japan">Japan</option>'+
            '<option value="Jordan">Jordan</option>'+
            '<option value="Kazakhstan">Kazakhstan</option>'+
            '<option value="Kenya">Kenya</option>'+
            '<option value="Korea">Korea</option>'+
            '<option value="Kuwait">Kuwait</option>'+
            '<option value="Kyrgyzstan">Kyrgyzstan</option>'+
            '<option value="Latvia">Latvia</option>'+
            '<option value="Lebanon">Lebanon</option>'+
            '<option value="Lesotho">Lesotho</option>'+
            '<option value="Liberia">Liberia</option>'+
            '<option value="Libya">Libya</option>'+
            '<option value="Lithuania">Lithuania</option>'+
            '<option value="Luxembourg">Luxembourg</option>'+
            '<option value="Macao">Macao</option>'+
            '<option value="Macedonia">Macedonia, The Former Yugoslav Republic Of</option>'+
            '<option value="Madagascar">Madagascar</option>'+
            '<option value="Malawi">Malawi</option>'+
            '<option value="Malaysia">Malaysia</option>'+
            '<option value="Malta">Malta</option>'+
            '<option value="Mauritius">Mauritius</option>'+
            '<option value="Mexico">Mexico</option>'+
            '<option value="Moldova">Moldova, Republic Of</option>'+
            '<option value="Mongolia">Mongolia</option>'+
            '<option value="Morocco">Morocco</option>'+
            '<option value="Mozambique">Mozambique</option>'+
            '<option value="Myanmar">Myanmar</option>'+
            '<option value="Namibia">Namibia</option>'+
            '<option value="Nepal">Nepal</option>'+
            '<option value="Netherlands">Netherlands</option>'+
            '<option value="New Zealand">New Zealand</option>'+
            '<option value="Nicaragua">Nicaragua</option>'+
            '<option value="Niger">Niger</option>'+
            '<option value="Nigeria">Nigeria</option>'+
            '<option value="Norway">Norway</option>'+
            '<option value="Oman">Oman</option>'+
            '<option value="Pakistan">Pakistan</option>'+
            '<option value="Papua New Guinea">Papua New Guinea</option>'+
            '<option value="Paraguay">Paraguay</option>'+
            '<option value="Peru">Peru</option>'+
            '<option value="Philippines">Philippines</option>'+
            '<option value="Poland">Poland</option>'+
            '<option value="Portugal">Portugal</option>'+
            '<option value="Qatar">Qatar</option>'+
            '<option value="Romania">Romania</option>'+
            '<option value="Russia">Russian Federation</option>'+
            '<option value="Rwanda">Rwanda</option>'+
            '<option value="Samoa">Samoa</option>'+
            '<option value="San Marino">San Marino</option>'+
            '<option value="Saudi Arabia">Saudi Arabia</option>'+
            '<option value="Senegal">Senegal</option>'+
            '<option value="Serbia">Serbia</option>'+
            '<option value="Seychelles">Seychelles</option>'+
            '<option value="Sierra Leone">Sierra Leone</option>'+
            '<option value="Singapore">Singapore</option>'+
            '<option value="Slovakia">Slovakia</option>'+
            '<option value="Slovenia">Slovenia</option>'+
            '<option value="Solomon Islands">Solomon Islands</option>'+
            '<option value="South Africa">South Africa</option>'+
            '<option value="Sudan">Sudan</option>'+
            '<option value="Spain">Spain</option>'+
            '<option value="Sri Lanka">Sri Lanka</option>'+
            '<option value="Suriname">Suriname</option>'+
            '<option value="Swaziland">Swaziland</option>'+
            '<option value="Switzerland">Switzerland</option>'+
            '<option value="Taiwan">Taiwan</option>'+
            '<option value="Tajikistan">Tajikistan</option>'+
            '<option value="Tanzania">Tanzania, United Republic Of</option>'+
            '<option value="Thailand">Thailand</option>'+
            '<option value="Togo">Togo</option>'+
            '<option value="Tonga">Tonga</option>'+
            '<option value="Trinidad">Trinidad And Tobago</option>'+
            '<option value="Tunisia">Tunisia</option>'+
            '<option value="Turkey">Turkey</option>'+
            '<option value="Uganda">Uganda</option>'+
            '<option value="Ukraine">Ukraine</option>'+
            '<option value="United Arab Emirates">United Arab Emirates</option>'+
            '<option value="United Kingdom">United Kingdom</option>'+
            '<option value="United States">United States</option>'+
            '<option value="Uruguay">Uruguay</option>'+
            '<option value="Uzbekistan">Uzbekistan</option>'+
            '<option value="Vanuatu">Vanuatu</option>'+
            '<option value="Venezuela">Venezuela, Bolivarian Republic Of</option>'+
            '<option value="Vietnam">Vietnam</option>'+
            '<option value="Virgin Islands">Virgin Islands, British</option>'+
            '<option value="Virgin Islands US">Virgin Islands, U.S.</option>'+
            '<option value="Yemen">Yemen</option>'+
            '<option value="Zambia">Zambia</option>'+
            '<option value="Zimbabwe">Zimbabwe</option>';

    visa_dankort +='<option value="">Select Country</option>'+
            '<option value="Denmark">Denmark</option>';



    let banks = {
        'Afghanistan': [
            "Afghanistan International Bank",
            "Afghanistan Commercial Bank",
            "Ghazanfar Bank",
            "Maiwand Bank",
            "Afghan United Bank",
            "Azizi Bank",
            "Bank-e-Millie Afghan",
            "First MicroFinance Bank-Afghanistan",
            "New Kabul Bank",
            "Pashtany Bank",
            "Bakhter Bank",
            "Bank-e Millie Afghan",
            "Pashtany Bank",
            "New Kabul Bank",
            "Alfalah Bank",
            "National Bank of Pakistan",
            "Habib Bank"],
    'Albania': [
            "Alpha Bank – Albania",
            "Banka Kombetare Tregtare (BKT)",
            "Credins Bank (CB)",
            "Credit Agricole Albania",
            "Credit Bank of Albania (CBA)",
            "First Investment Bank, Albania (FIB)",
            "International Commercial Bank (ICB)",
            "Intesa Sanpaolo Bank Albania (formerly American Bank of Albania)",
            "National Bank of Greece (Tirana Branch) (NBG)",
            "Procredit Bank (PCB) (commercial bank/microfinancing)",
            "Raiffeisen Albania",
            "Société Générale Albania (SGAL)",
            "Tirana Bank (TB) (part of Piraeus Bank)",
            "Union Bank (Albania) (UB)",
            "United Bank of Albania (UBA)",
            "Veneto Banka Albania (formerly Italian Development Bank)",
            ], 
    'Algeria': [
            "Banque extérieure d’Algérie (BEA)",
            "Banque nationale d’Algérie (BNA)",
            "Banque de l’agriculture et du développement rural (BADR)",
            "Banque de développement local (BDL)",
            "Crédit populaire d’Algérie (CPA)",
            "Caisse nationale d’épargne et de prévoyance (CNEP Banque)",
            "Caisse nationale de mutualité agricole (CNMA)",
            "Banque Al Baraka Algerie",
            "Arab Banking Corporation (ABC)",
            "Natixis Banque",
            "Societe Generale Algerie",
            "Citibank",
            "Arab Bank Plc",
            "BNP Paribas el Djazair",
            "Trust Bank Algeria",
            "Gulf Bank Algeria",
            "Housing Bank for Trade and Finance",
            "Fransabank el Djazair",
            "Calyon Algerie SPA",
            "Al Salam Bank Algeria SPA",
            "HSBC Algeria SPA",
            "Banque Nationale d’Algérie (BNA)",
            "Banque Extérieure d’Algérie (BEA)",
            "Banque de l’Agriculture et du Développement Rural (BADR)",
            "ABC International Bank Plc-Algeria",
            "African Development Bank Group – Algeria.",
            "Al Salam Bank Algeria.",
            "Arab Bank Algeria.",
            "Arab Banking Corporation.",
            "Banque Albaraka Alg.",
            "Banque Exterieure D’algerie British Arab Commercial Bank (bacb)",
            "Bnp Paribas El Djaza.",
            "Fransabank El DJAZA",
            "Natixis Banque Alg",
            "Union De Banques Arabes Et Francaises (U.B.A.F.)",
            "Caisse Nationale D",
            "Calyon Alg",
            "Citibank Alg",
            "Gulf Bank Algeria",
            "Societe General Algeria",
            "The World Bank – Algeria",
            "Trust Bank ALG",
            "Société Générale",
            "BNP Paribas",
            "Natixis",
            "Algeria Gulf Bank",
            ],
    'Andorra': [
            "MoraBanc",
            "Andbank",
            "Credit Andorra Oficina Seu Social",
            "Credir Andorra",
            "BancSabadell d’Andorra"
            ],
    'Angola': [
            "Banco Africano de Investimentos",
            "Banco Angolano de Negócios e Comércio",
            "Banco BIC",
            "Banco do Brasil",
            "Banco Comercial",
            "Banco de Comércio e Indústria",
            "Banco de Desenvolvimento de Angola",
            "Banco Espírito Santo",
            "Banco de Fomento",
            "Banco Mundial",
            "BNP Paribas",
            "Banco Privado Atlântico",
            "Banco de Poupança e Crédito",
            "Banco de Negócios Internacional",
            "Banco Quantun Capital",
            "Banco Regional do Keve",
            "Banco Sol",
            "Banco Totta de Angola",
            "Banco Millenium",
            "Banco VTB Africa",
            "Finibanco",
            "Novo Banco",
            "Banco de Poupança e Crédito S.A.R.L.",
            "Banco de Comércio e Indústria",
            "Banco de Desenvolvimento de Angola",
            "BFA (Banco de Fomento Angolano",
            "Banco BIC,",
            "Caixa Angola",
            "Millennium–Atlantico Bank",
            "Standard Lesotho Bank"
        ], 
        'Antigua': [
            "The Hanover Bank",
            "Antigua Commercial Bank Ltd (ACB)",
            "Antigua Overseas Bank Ltd (AOB)",
            "Scotiabank (formerly Bank of Nova Scotia)",
            "DBank ",
            "Global Bank of Commerce Ltd. ",
            "Antigua / Barbuda Investment Bank Ltd",
            "Commerce Bank of Antigua",
            "Standford International Bank Limited",
            "Bank of Antigua",
            "EuroFed Bank",
            "American International Bank (AIB)",
            "Barrington Bank",
            "Royal Bank of Canada (RBC)",
            "Credit Bank Int’l",
            "European Union Bank",
            "Swiss American Bank",
            "Swiss American National Bank",
            "Barclays Bank",
            "Premier International Bank Limited",
            "Swiss American",
            "Scotiabank (formerly Bank of Nova Scotia)",
            "Ansbacher (Antigua) Ltd formerly PKB Privatbank Limited",
            "Global Bank of Commerce Ltd. ",
            "Trium Bank and Trust Ltd",
            "Antigua and Barbuda Development Bank",
            "PKB Privatbank Limited",
            "V T I Bank Limited",
        ], 
    'Argentina': [
            "Citibank Argentina",
            "Credit Suisse Argentina",
            "MBA Lazard Argentina",
            "CMF Corporate Bank",
            "Banco de la Nación Argentina",
            "Citibank ",
            "Industrial and Commercial Bank of China",
            "Ing. Bank N V",
            "Inter-American Development Bank",
            "Banelco BBVA – French Bank",
            "Citibank Argentina",
            "HSBC Bank Argentina S.A"
            ], 
    'Armenia': [
            "Union of Banks of Armenia",
            "Byblos Bank",
            "Central Bank",
            "VTB Bank Armenia",
            "Mellat Bank",
            "Anelik Bank",
            "Araratbank",
            "ACBA-Credit Agricole Bank,",
            "Ameriabank",
            "Anelik Bank,",
            "Araratbank,",
            "Ardshinbank,",
            "Armbusinessbank",
            "ArmEconomBank",
            "ArmSwissBank,",
            "Artsakhbank",
            "Bank Mellat Armenia",
            "Byblos Bank Armenia,",
            "Converse Bank",
            "Evocabank,",
            "HSBC Bank Armenia",
            "InecoBank,",
            "Unibank,",
            "VTB Armenia",
            "Armenian Development Bank",
            "AreximBank-Gazprombank",
            "Cascade Bank",
            "BTA Bbank",
            "ProCredit Bank",
            "Union of Banks of Armenia"
            ], 
    'Australia': [
            "AMP Bank Limited",
            "Australian Military Bank",
            "Police Bank",
            "Greater Bank",
            "Heritage Bank",
            "Hume Bank",
            "Qudos Bank",
            "Auswide Bank",
            "Bank SA",
            "National Australia Bank",
            "Bank Australia (previously bankmecu)",
            "Bank of Melbourne",
            "IMB Bank",
            "Macquarie Bank Limited",
            "MyState Bank",
            "P&N Bank",
            "Australia and New Zealand Banking Group Limited (ANZ)",
            "Commonwealth Bank of Australia",
            "Arab Bank Australia Limited",
            "Bank of China (Australia) Limited",
            "Bank of Sydney Ltd, subsidiary of Bank of Beirut",
            "Citibank Australia",
            "HSBC Bank Australia",
            "ING Bank (Australia) a subsidiary of ING Group, Netherlands",
            "ABN AMRO Bank N.V.",
            "Bank of America, National Association"
        ], 
        'Austria': [
            "LGT Bank AG",
            "UniCredit Bank Austria",
            "Austrian Anadi Bank AG",
            "VTB Bank (Europe) SE – ZNdl. Wien",
            "Bank Austria Wohnbaubank AG",
            "Bank Austria",
            "ING-DiBa Austria",
            "Allianz Investment Bank AG"
        ], 
        'Azerbaijan': [
            "AccessBank",
            "AFB Bank",
            "AGBank",
            "Amrahbank",
            "ASB",
            "AtaBank",
            "Atrabank",
            "Azal Bank",
            "Azər-Türk Bank",
            "Azerbaijan Credit Bank",
            "Bank BTB",
            "Bank Eurasia",
            "Bank of Azerbaijan",
            "Bank of Baku",
            "Bank Respublika",
            "Bank Melli Iran",
            "Bank Silk Way",
            "Bank Standard",
            "Bank Technique aka Texnikabank",
            "Caucasus Development Bank",
            "DekaBank",
            "Debutbank",
            "DemirBank",
            "Dresdner Bank",
            "EBRD",
            "Evrobank",
            "Expressbank",
            "Ganjabank",
            "Günay Bank",
            "Kapital Bank",
            "KredoBank",
            "MuganBank",
            "Nakhchivanbank",
            "NBCBank",
            "Nikoil Bank",
            "Parabank",
            "PAŞA Bank",
            "Rabitabank",
            "Royal Bank",
            "TuranBank",
            "Unibank",
            "United Credit Bank",
            "VTB Bank Azerbaijan",
            "Xalq Bank",
            "Yapi Kredi Bank Azerbaijan",
            "Zaminbank",
            "National Bank of Pakistan",
            "International Bank of Azerbaijan",
            "Azerbaijan International Bank"
        ], 
        'Bahamas': [
            "Hottinger Bank",
            "Bank of The Bahamas International Ltd",
            "Commonwealth Bank Ltd.",
            "Fidelity BankLtd",
            "Citibank N.A.",
            "FirstCaribbean International Bank(FCIB) Ltd.",
            "The Finance Corporation of The Bahamas (FINCO)",
            "Royal Bank of Canada",
            "Scotiabank Bahamas Limited",
            "Bank of the Bahamas Limited",
            "AnsbacherLtd",
            "Credit Suisse ltd",
            "Guaranty Trust Bank Limited",
            "Lombard Odier Darier Hentsch Private Bank"
        ], 
        'Bahrain': [
            "Addax Bank B.S.C",
            "Allied Bank Limited",
            "National Bank of Bahrain B.S.C. – NBB",
            "Bank of Bahrain and Kuwait B.S.C. – BBK",
            "Ahli United Bank B.S.C. AUB",
            "Arab Bank plc",
            "Bahrain Development Bank B.S.C. – BDB",
            "BMI Bank B.S.C – Subsidiary of Al Salam Bank",
            "BNP Paribas",
            "Citibank N.A.",
            "Credit Libanais SAL",
            "Eskan Bank B.S.C.",
            "Future Bank B.S.C.",
            "Arab Bank plc",
            "Habib Bank Limited – HBL",
            "HSBC Bank Middle East Limited",
            "ICICI Bank Limited",
            "Mashreq Bank PSC",
            "National Bank of Abu Dhabi (Bahrain Branch)",
            "National Bank of Kuwait S.A.K. – NBK",
            "Standard Chartered Bank – SCB",
            "State Bank of India",
            "The Housing Bank for Trade and Finance – Jordan United Bank Limited",
            "United Bank Limited – UBL",
            "Alubaf Arab International Bank (Bahrain) B.S.C. (c",
            "Askari Bank Limited",
            "Askari Bank Limited"
        ], 
        'Bangladesh': [
            "Islami Somaz Bank Limited",
            "Al-Arafah Islami Bank Limited",
            "EXIM Bank Limited",
            "First Security Islami Bank Limited",
            "ICB Islamic Bank Limited",
            "Islami Bank Bangladesh Limited",
            "Shahjalal Islami Bank Limited",
            "Social Islami Bank Limited",
            "Union Bank Limited",
            "United Commercial Bank Limited",
            "NRB Commercial Bank Limited",
            "Sonali Bank Ltd.",
            "Sonali Bank Ltd.",
            "Agrani Bank Ltd.",
            "Rupali Bank Ltd.",
            "Bangladesh Krishi Bank",
            "Bangladesh Development Bank Limited.",
            "BASIC Bank Limited",
            "Bank Al-Falah Limited",
            "Citibank N.A",
            "Commercial Bank of Ceylon PLC",
            "Habib Bank Limited",
            "National Bank of Pakistan",
            "Standard Chartered Bank",
            "State Bank of India",
            "Punjab National Bank",
            "Woori Bank",
            "HSBC",
            "AB Bank Limited",
            "Bangladesh Commerce Bank Limited",
            "Bank Asia Limited",
            "Bengal Bank Limited",
            "BRAC Bank Limited",
            "City Bank Limited",
            "Dhaka Bank Limited",
            "Dutch-Bangla Bank Limited",
            "Eastern Bank Limited",
            "IFIC Bank Limited",
            "Jamuna Bank Limited",
            "Meghna Bank Limited",
            "Mercantile Bank Limited",
            "Midland Bank"
        ], 
        'Barbados': [
            "Barbados National Bank (BNB)",
            "Republic Bank",
            "RBC Royal Bank",
            "First Caribbean International Bank",
            "The Bank of Nova Scotia",
            "First Citizens Bank",
            "Republic Bank Limited",
            "First Citizens (Barbados) Bank",
            "RBTT Bank Barbados",
            "AMICORP BANK AND TRUST LTD",
            "BANK OF BUTTERFIELD LIMITED",
            "BANK OF NOVA SCOTIA,THE",
            "GLENHURON BANK LTD",
            "Caribbean Investment Bank",
            "Royal Bank of Canada",
            "CIBC FirstCaribbean International Bank",
            "Scotiabank",
            "Modhumoti Bank Limited",
            "Mutual Trust Bank Limited",
            "National Bank Limited",
            "National Credit & Commerce Bank Limited",
            "NRB Bank Limited",
            "One Bank Limited",
            "Premier Bank Limited",
            "Prime Bank Limited",
            "Pubali Bank Limited",
            "South Bangla Agriculture & Commerce Bank Limited",
            "Southeast Bank Limited",
            "Standard Bank Limited",
            "The Farmers Bank Limited",
            "Trust Bank Limited",
            "Uttara Bank Limited",
            "Shimanto Bank Ltd"
        ], 
        'Belarus': [
            "Eurobank (Belarus)",
            "Belpromstroibank",
            "Bank Moscow–Minsk",
            "Belarussian bank of development and reconstruction (Belinvestbank)",
            "Belvnesheconombank",
            "Paritetbank",
            "Belarussian Industrial Bank",
            "Belagroprombank",
            "Bank of Reconversion and Development (RDB–Bank)",
            "Trustbank",
            "TECHNOBANK",
            "Golden Taler Bank (GT–Bank)",
            "Priorbank",
            "VTB Bank (Belarus)",
            "Absolutbank",
            "Delta Bank",
            "Credexbank",
            "Belarusky narodny bank",
            "Home Credit Bank (HCBank)",
            "ASTANAEXIMBANK",
            "Belarusbank",
            "BELROSBANK",
            "SOMBelBank",
            "Minsk Transit Bank",
            "International reserve bank",
            "Belorussian–Russian Belgazprombank",
            "Byelorussian–Swiss Bank (BelSwissBank)",
            "International Trade and Investment Bank (ITI–Bank)"
        ], 
        'Belgium': [
            "Banque nationale de Belgique",
            "ABN AMRO Bank Belgium",
            "Anhyp",
            "Artesia Bank",
            "Bank Corluy",
            "BBL Web’Bank",
            "CERA Bank",
            "Citibank Belgium",
            "Fortis",
            "Gemeentekrediet",
            "Generale Bank",
            "Goffin Group",
            "ABK Bank CVBA",
            "Argenta Spaarbank NV",
            "BKCP SCRL",
            "BNP Paribas Fortis SA",
            "Banca Monte Paschi Belgio",
            "Bank Dierickx Leys",
            "Bank J. Van Breda en C° NV",
            "Banque CPH",
            "Banque Degroof Petercam SA",
            "  Banque Eni SA",
            "Banque Nagelmackers SA",
            "Belfius Bank",
            "Banque Transatlantique Belgium ",
            "Beobank SA",
            "Byblos Bank Europe",
            "CBC Banque",
            "CENTEA",
            "Centrale Kredietverlening",
            "Crelan SA",
            "Crédit professionnel SA",
            "Delen Private Bank SA",
            "  Euroclear Bank",
            "Europabank",
            "Goffin Bank NV",
            "  ING Belgium",
            "KBC Bank NV",
            "Keytrade Bank SA",
            "MeDirect Bank SA",
            "Puilaetco Dewaay Private Bankers ",
            "Santander Consumer Bank SA",
            "Saxo Banque (France) SA",
            "  Shizuoka Bank (Europe) SA",
            "Société Générale Private Banking NV",
            "The Bank of New York Mellon SA",
            "United Taiwan Bank SA",
            "VAN DE PUT & CO Banquiers ",
            "bpost banque SA",
            "vdk bank NV",
            "ABN AMRO Bank NV",
            "ABN AMRO Clearing Bank SA (",
            "AXA Bank Belgium SA",
            "Aareal Bank AG ",
            "Adyen BV, Belgian Branch",
            "Arkéa Direct Bank SA",
            "Attijariwafa bank Europe SA",
            "BHW Bausparkasse AG",
            "BNP Paribas",
            "Banco Bilbao Vizcaya Argentaria",
            "Banco Santander SA",
            "Bank of America Merrill Lynch International",
            "Bank of America",
            "Bank of Baroda",
            "  Bank of China (Luxembourg) SA",
            "  Bank of India",
            "Banque BCP",
            "Banque Chaabi du Maroc",
            "Banque Degroof Petercam Luxembourg SA",
            "Banque Internationale à Luxembourg",
            "Banque PSA Finance SA",
            "Banque Privée Edmond de Rothschild Europe",
            "BinckBank NV",
            "CA Indosuez Wealth (Europe), succursale en Belgique",
            "Caceis Bank",
            "  Caisse d’Epargne Nord France Europe (",
            "Citibank Europe Plc",
            "Citibank International Limited",
            "Commerzbank AG",
            "Compagnie de Banque Privée Quilvest SA",
            "Coöperatieve Rabobank U.A.",
            "Credit Europe Bank NV",
            "Crédit Agricole Corporate and Investment Bank",
            "Crédit Foncier de France SA",
            "Crédit foncier et communal d’Alsace et de Lorraine-Banque",
            "Demir-Halk Bank (Nederland) NV",
            "Deutsche Bank AG",
            "Edmond de Rothschild (Europe)",
            "  Elavon Financial Services DAC",
            "F. Van Lanschot Bankiers NV",
            "FCE Bank plc",
            "HSBC Bank plc",
            "Habib Bank Limited",
            "Hoist Finance AB",
            "ICICI Bank UK plc",
            "ING Bank NV",
            "Industrial and Commercial Bank of China (Europe)",
            "J.P. Morgan Europe Ltd",
            "NIBC Bank SA",
            "Natixis Bank SA",
            "Société Générale",
            "State Bank of India",
            "The Bank of New York Mellon",
            "The Royal Bank of Scotland Plc",
            "Triodos Bank NV",
            "Union Bancaire Privée (Europe) SA",
            "Union Bank of India (",
            "ING Private Banking"
        ], 
        'Belize': [
            "Heritage Bank Limited",
            "National Bank of Belize Limited",
            "Atlantic Bank",
            "Belize Bank",
            "Central Bank of Belize",
            "FirstCaribbean International Bank Ltd.",
            "Holy Redeemer Credit Union",
            "Scotiabank Belize",
            "Caye International Bank Ltd.",
            "Atlantic International Bank Limited",
            "Belize Bank International Limited",
            "Choice Bank Limited",
            "Heritage International Bank & Trust Limited"
        ], 
        'Benin': [
            "African Investment Bank",
            "International Commercial Bank I.C.B. Benin",
            "Benin Regional Solidarity Bank",
            "Banque Atlantique Bénin",
            "Bank of Africa Bénin",
            "BGFIBank Benin",
            "Banque de l’Habitat du Bénin",
            "Banque Internationale du Bénin",
            "Banque Sahélo-Saharienne pour l’Investissement et le Commerce (BSSIC)",
            "Continental Bank Bénin",
            "GM Clearing House EU",
            "Caissie Primes",
            "Ecowas Diaspora Banking",
            "Ecowas Diaspora Bank",
            "King Bank Plc Bénin",
            "MSF Bank Bénin",
            "Diamond Bank Bénin",
            "Ecobank Bénin",
            "Industrial Bank of Benin, West Africa",
            "Livex International Bank Bénin",
            "O.P.C",
            "United Benin Bank",
            "Allied Benin Financial Institution",
            "Ulti Bank Plc Bénin",
            "Financial Bank Bénin",
            "Societe Generale de Banques au Bénin",
            "United Bank for Africa",
            "ICASH POWER Financial & Mortgage bank",
            "Bank of Africa Bénin (BOA)"
        ], 
        'Bermuda': [
            "Bermuda Commercial Bank Limited",
            "Clarien Bank Limited",
            "HSBC Bank Bermuda Limited",
            "The Bank of N T Butterfield & Son Limited",
            "Bank of Butterfield Ltd"
        ], 
        'Bhutan': [
            "Druk PNB Bank",
            "T Bank Bhutan",
            "Bhutan Development Bank",
            "Bhutan National Bank",
            "State Bank Of India BHUTAN "
        ],
        'Bolivia': [
            "Banco Economico Bolivia",
            "Banco Ganadero",
            "Banco Prodem",
            "Banco Unión Bolivia",
            "Banco de Crédito de Bolivia",
            "Banco Mercantil Santa Cruz",
            "BBVA Previsión Bolivia",
            "Banco PYME Los Andes ProCredit",
            "Banco Solidario Bolivia",
            "Banco Nacional de Bolivia",
            "HSBC (merger between Panama’s largest banking group Grupo Banistmo and HSBC Panama)",
            "Citibank (subsidiary of Citigroup which merged with Banco Uno and Banco Cuscatlan)",
            "Banco Bilbao Vizcaya Argentaria.",
            "Banco Atlantico Panama (subsidiary of Banco Santander)",
            "Scotiabank.",
            "Banco de la Nación Argentina Bolivia",
            "Banco do Brasil Bolivia"
        ], 
        'Bosnia': [
            "Bosnia & Herzegovina",
            "Investiciono-komercijalna banka",
            "Union Banka",
            "Komercijalno-investiciona banka",
            "MF banka",
            "Razvojna banka Federacije BiH",
            "Vakufska Banka",
            "Nova banka",
            "Pavlović Internacional Bank",
            "Privredna banka Sarajevo",
            "Addiko Bank",
            "Bosna Bank International",
            "Intesa Sanpaolo Banka",
            "Komercijalna banka",
            "NLB Banka d.d.",
            "NLB Banka a.d.",
            "ProCredit Bank",
            "Raiffeisen Bank",
            "Sberbank a.d.",
            "Sberbank BH",
            "Sparkasse Bank",
            "UniCredit Bank Banja Luka",
            "ZiraatBank BH",
            "Nova Banka"
        ],
        'Botswana': [
            "ABN AMRO",
            "ABN AMRO Outside Banking Unit",
            "BancABC",
            "Bank of Baroda",
            "Bank Gaborone",
            "Barclays Bank",
            "Capital Bank",
            "First National Bank",
            "Stanbic Bank",
            "Standard Chartered Bank",
            "Bank of Baroda",
            "Bank of India",
            "Barclays Bank"
        ],
        'Brazil': [
            "Banco do Brasil",
            "HSBC",
            "Banco J Safra S/A",
            "Banco Itaú",
            "Banco PanAmericano S/A",
            "Banco Santander",
            "Citibank",
            "Banco do Brasil",
            "Banestes (state-owned)",
            "Caixa Econômica Federal",
            "Banrisul (state-owned)",
            "Banco do Estado do Rio Grande do Sul S/A",
            "Banco Real",
            "Citibank (Citigroup)",
            "HSBC Bank Brasil",
            "Banco Santander Banespa",
            "Itaú Unibanco",
            "Banco Safra",
            "Banco Prosper",
            "Bradesco"
        ],
        'Brunei Darussalam': [
            "Baiduri Bank",
            "Bank Islam Brunei Darussalam",
            "Perbadanan Tabung Amanah Islam Brune",
            "Maybank",
            "RHB Bank",
            "Standard Chartered Bank",
            "UOB Ltd.",
            "Bank of China (Hong Kong)"
        ],
        'Bulgaria': [
            "UniCredit Bulbank",
            "DSK Bank",
            "First Investment Bank",
            "United Bulgarian Bank",
            "Eurobank Bulgaria",
            "Raiffeisenbank, Bulgaria",
            "Société Générale Expressbank",
            "Central Cooperative Bank",
            "CIBANK",
            "Piraeus Bank Bulgaria",
            "Allianz Bank Bulgaria",
            "Bulgarian Development Bank",
            "Investbank",
            "ProCredit Bank, Bulgaria",
            "Municipal Bank PLC",
            "International Asset Bank",
            "BNP Paribas S.A. – Sofia Branch",
            "D Commerce Bank",
            "TBI Bank",
            "Victoria Commercial Bank",
            "Bulgarian-American Credit Bank",
            "Citibank Europe",
            "ING Bank N.V.",
            "Tokuda Bank",
            "T.C. Ziraat Bank",
            "IşBANK AG"
        ],
        'Burkina Faso': [
            "Bank of Africa (BOA)",
            "Banque Atlantique Burkina Faso",
            "Banque de l’Habitat du Burkina Faso",
            "Banque Régionale de Solidarité",
            "Société Générale de Banques au Burkina (SG-BB)",
            "6. Banque Internationale du Burkina (BIB)",
            "Banque Sahélo-Saharienne pour l’Investissement et le Commerce (BSIC)",
            "Banque Internationale pour le Commerce, l’Industire et l’Agriculture du Burkina",
            "Banque Commerciale du Burkina ",
            "Ecobank Burkina ",
            "Banque Agricole et Commerciale du Burkina",
            "United Bank for Africa",
            "Coris Bank "
        ],
        'Myanmar': [
            "Construction and Housing Development Bank",
            "Global Treasure Bank (former Myanmar Livestock and Fisheries Development Bank Ltd)",
            "Innwa Bank Ltd",
            "Myanmar Citizens Bank Ltd",
            "Myawaddy Bank Ltd",
            "Naypyitaw Sibin Bank",
            "Rural Development Bank Ltd",
            "Small & Medium Industrial Development Bank Ltd",
            "Yadanabon Bank Ltd",
            "Yangon City Bank Ltd",
            "Myanma Agricultural Development Bank",
            "Myanma Economic Bank",
            "Myanma Foreign Trade Bank",
            "Myanma Investment and Commercial Bank",
            "Asia Green Development Bank Ltd",
            "Asia-Yangon Bank Ltd",
            "Ayeyarwady Bank Ltd",
            "Ayeyarwaddy Farmers Development Bank",
            "Co-operative Bank Ltd (CB Bank)",
            "First Private Bank Ltd",
            "Kanbawza Bank Ltd",
            "Myanma Apex Bank Ltd",
            "Myanmar Microfinance Bank Limited",
            "Myanmar Oriental Bank Ltd",
            "Shwe Rural and Urban Development Bank",
            "Tun Foundation Bank Ltd",
            "United Amara Bank Ltd",
            "Yoma Bank Ltd"
        ],
        'Burundi': [
            "FinBank Burundi",
            "Banque Commerciale du Burundi (Burundi Commercial Bank) (BANCOBU)",
            "Banque de Gestion et de Financement(Banque de Gestion et de Financement) (BGF)",
            "Banque Burundaise pour le Commerce et l’Investissement (Burundi Bank of Commerce and Investment) (BBCI)",
            "Banque de Credit de Bujumbura (Bujumbura Credit Bank) (BCB) – A member of the Bank of Africa Group",
            "CRDB Bank Burundi",
            "Diamond Trust Bank Burundi",
            "Ecobank Burundi",
            "Interbank Burundi (IBB)",
            "KCB Burundi",
            "Diamond trust bank",
            "Eco bank Burundi"
        ],
        'Cambodia': [
            "ACLEDA Bank PLC (ACLEDA)",
            "AGRIBANK CAMPUCHIA BRANCH (AGRIBANK)",
            "Bank for Investment and Development of Cambodia Plc (BIDC)",
            "Booyoung Khmer Bank (BKB)",
            "Cambodia Asia Bank Ltd (CAB)",
            "CIMB Bank PLC (CIMB)",
            "Cambodia Mekong Bank Public Ltd (CMB)",
            "Cambodian Commercial Bank (CCB)",
            "Cambodian Public Bank (Campu Bank)",
            "Union Commercial Bank PLC (UCB)",
            "First Commercial Bank Phnom Penh Branch (FCB)",
            "Foreign Trade Bank of Cambodia (FTB)",
            "HwangDBS Commercial Bank PLC (HDBSCB)",
            "Kookmin Bank Cambodia PLC (KBC)",
            "Krung Thai Bank PLC, Phnom Penh Branch (KTB)",
            "Vattanac Bank Ltd (VBL)",
            "Maybank Phnom Penh Branch (Maybank)",
            "OSK Indochina Bank (OSKIBL)",
            "Phnom Penh Commercial Bank (PPCB)",
            "Saigon Thuong Tin Commercial Joint Stock Bank (Sacom Bank)",
            "Shinhan Khmer Bank (SKB)",
            "Advanced Bank of Asia Ltd (ABA)",
            "Australia and New Zealand Royal Bank ( Cambodia ) Ltd (ANZ Royal Bank)",
            "Bank of China Limited Phnom Penh Branch (BOC)",
            "Bank of India Phnom Penh Branch (BOI)",
            "Canadia Bank PLC (CNB)",
            "Krung Thai Bank PLC, Phnom Penh Branch (KTB)",
            "Maruhan Japan Bank (MJB)",
            "Maybank Phnom Penh Branch (Maybank)",
            "Singapore Banking Corporation Ltd (SBC)"
        ],
        'Cameroon': [
            "Afriland First Bank",
            "Atlantic Bank Cameroon",
            "Banque International du Cameroun pour l’Epargne et le Crédit (BICEC)",
            "BGFI Bank Cameroon",
            "ScbCameroun",
            "Citibank",
            "Commercial Bank of Cameroon",
            "Ecobank Cameroon – Acquired Oceanic Bank Cameroon",
            "National Financial Credit Bank (NFCB)",
            "Société Commerciale de Banque du Cameroun – (Formerly SCB Credit Agricole)",
            "Societe Generale des Banques au Cameroun (SGBC)",
            "Standard Chartered Bank",
            "Union Bank of Cameroon (UBC)",
            "United Bank for Africa (UBA)",
            "Bank Cameroon"
        ],
        'Canada': [
            "Banca Commerciale Italiana – BCI Bank",
            "Banque Nationale du Canada",
            "Bank of Nova Scotia",
            "Bank of Montreal",
            "Canada Trust",
            "Business Development Bank of Canada – Banque de Développement du Canada",
            "Canadian Imperial Bank of Commerce – CIBC",
            "Citizens Bank of Canada",
            "Canadian Western Bank",
            "Citizens Trust",
            "Hong Kong Bank of Canada – HSBC",
            "First Calgary Savings",
            "ING Direct",
            "Mouvement Desjardins",
            "Laurentian Bank of Canada",
            "Mbanx – Canada’s first virtual bank",
            "Mellon Bank Canada",
            "Montreal Trust",
            "National Bank of Canada",
            "Pacific Coast Savings",
            "President’s Choice Financial",
            "Royal Bank of Canada",
            "Scotiabank",
            "TD Bank",
            "Toronto Dominion Bank",
            "Trimark Investments",
            "Bank of America N.A",
            "Bank of China Limited",
            "Bank of New York Mellon",
            "Bank of Tokyo-Mitsubishi UFG",
            "Barclays Bank PLC",
            "BNP Paribas",
            "Capital One Bank (USA), N.A",
            "China Constructions Bank",
            "Citibank",
            "Comerica Bank",
            "Cooperatieve Rabobank U .A.",
            "Deutsche Bank AG, Canada",
            "Fifth Third Bank",
            "Frist Commercial Bank",
            "JP Morgan Chase Bank",
            "M&T Bank",
            "Maple Bank GmBH",
            "Mega International Commercial Bank Co., Ltd",
            "Mizuho Bank, Ltd",
            "PNC Bank, National Association",
            "Societe Generale",
            "State Street Bank",
            "Sumitomo Mitsui Banking Corporation",
            "U.S. Bank National Assocation",
            "United Overseas Bank Limited",
            "Wells Fargo Bank",
            " Pictet  ",
            " J.P. Morgan ",
            "HSBC",
            "Deutsche Bank",
            "BNP Paribas Fortis ",
            "Royal Bank of Canada (RBC) ",
            "Credit Suisse",
            "Morgan Stanley",
            "Merrill Lynch (Bank of America Corporation)",
            "UBS"
        ],
        'Cayman': [
            "Abbey National Treasury ",
            "Alhambra Bank",
            "Allied Irish Banks",
            "Amegy Bank",
            "BCP Finance Bank",
            "Atlantic Security Bank ",
            "Banco ABC Brasil ",
            "Banco Bradesco S.A.",
            "Banco Fibra",
            "Butterfield Bank (Cayman)",
            "Arab Banking Corporation",
            "ANZ Bank",
            "BAC International Bank",
            "BIC International Bank",
            "BNP Paribas ",
            "Banco BTG Pactual",
            "Banco Bilbao Vizcaya Argentaria (BBVA)",
            "Alexandria Bancorp",
            "Banco Colpatria"
        ],
        'Central African Republic': [
            "Bangui Cheques Postaux",
            "Banque Internationale pour le Centrafrique (BICA)",
            "Banque Populaire Maroco-Centrafricaine (BPMC)",
            "Caisse Autonome d’Amortissement des Dettes de l’Etat",
            "Commercial Bank Centrafrique",
            "Ecobank"
        ],
        'Chad': [
            "Ecobank",
            "Banque Arabe Soudano – Tchadienne",
            "Commercial Bank of Tchad",
            "Banque de Développement du Tchad",
            "Banque Internationale pour la Reconstruction & Developpement",
            "Banque Internationale pour l’Afrique au Tchad (BIAT)",
            "Banque Tchadienne de Crédit et de Dépôt (BTCD)",
            "Banque Sahélo-Saharienne pour l’Investissement et le Commerce",
            "FINADEV Microfinance Bank"
        ],
        'Chile': [
            "Banco BICE",
            "Banco Bilbao Vizcaya Argentaria (BBVA)",
            "Banco Consorcio",
            "Banco de Chile",
            "Banco de Crédito e Inversiones",
            "Banco del Desarrollo",
            "Banco Edwards-Citi",
            "Banco Falabella",
            "Banco Internacional",
            "Banco Itaú-Chile",
            "Banco Paris",
            "Banco Penta",
            "Banco Ripley",
            "Banco Santander Chile",
            "Banco Security",
            "Corpbanca",
            "Deutsche Bank Chile",
            "HSBC Bank Chile",
            "Rabobank",
            "Scotiabank Sud Americano",
            "Banco del Estado de Chile",
            "Banco de la Nación Argentina",
            "Banco do Brasil",
            "DnB NOR Bank ASA",
            "JP Morgan Chase Bank",
            "The Bank of Tokyo-Mitsubishi UFJ"
        ],
        'China': [
            "China Bohai Bank",
            "Shengjing Bank",
            "Bank of Changsha",
            "Bank of Jinzhou",
            "Bank of Jilin",
            "Harbin Bank",
            "Industrial Bank",
            "Fujian Haixia Bank",
            "China Guangfa Bank",
            "Bank of Ningbo",
            "Shanghai Pudong Development Bank",
            "Shenzhen City Commercial Bank",
            "Zhejiang Tailong Commercial Bank",
            "Agricultural Bank of China *",
            "Bank of China *",
            "Bank of Communications",
            "Bank of Dalian",
            "China CITIC Bank",
            "China Construction Bank *",
            "China Everbright Bank",
            "Hua Xia Bank",
            "Industrial and Commercial Bank of China *",
            "Postal Savings Bank of China",
            "ABN AMRO (Netherlands) (now RBS China due to de-merging)",
            "Australia and New Zealand Banking Group",
            "The Bank of East Asia (Hong Kong)",
            "The Bank of Tokyo-Mitsubishi UFJ (Japan) *",
            "Citibank (United States)",
            "DBS Bank (Singapore)",
            "Hang Seng Bank (Hong Kong)",
            "The Hongkong and Shanghai Banking Corporation (Hong Kong – see HSBC Bank (China))",
            "JPMorgan Chase Bank (United States) *",
            "Mizuho Corporate Bank (Japan) *",
            "Oversea-Chinese Banking Corporation (Singapore)",
            "United Overseas Bank (Singapore)",
            "Standard Chartered Bank (United Kingdom)",
            "OCBC Wing Hang Bank (Hong Kong)",
            "Dah Sing Bank (Hong Kong)",
            "Woori Bank (South Korea)",
            "Shinhan Bank (South Korea)",
            "Hana Bank (South Korea)",
            "Societe Generale (France)",
            "Bank of Montreal (Canada)",
            "Fubon Bank (Taiwan)",
            "Australia and New Zealand Bank",
            "Banco Santander",
            "Bank of America Merrill Lynch",
            "Bank of Montreal (Canada)",
            "Scotiabank (Canada)",
            "Bank of New York Mellon",
            "Bank Mandiri",
            "Barclays Bank",
            "BBVA Bank",
            "BNP Paribas",
            "Citibank China",
            "Commonwealth Bank of Australia",
            "Commerzbank",
            "Crédit Agricole",
            "Credit Suisse",
            "Dah Sing Bank",
            "DBS Bank",
            "Deutsche Bank",
            "ING Bank",
            "Intesa Sanpaolo",
            "JPMorgan Chase Bank",
            "KBC Bank",
            "Mizuho Corporate Bank",
            "National Australia Bank",
            "Norddeutsche Landesbank",
            "Rabobank",
            "Raiffeisen Bank International",
            "SPD Silicon Valley Bank",
            "UBS",
            "United Overseas Bank",
            "VTB Bank",
            "Wells Fargo Bank",
            "Westpac Bank",
            "Bank of Shanghai",
            "Bank of Taizhou",
            "Taian Bank",
            "UBS Securities, an investment bank associated with UBS",
            "WeBank (China)"
        ],
        'Colombia': [
            "Banco Cathay de Costa Rica",
            "HSBC Costa Rica",
            "Banco Uno; owned by Citigroup",
            "BAC San José; owned by GE Capital",
            "Banco Improsa",
            "Banca Promérica",
            "Banco Lafise",
            "Banco BCT",
            "Scotiabank",
            "Banco Cuscatlan; owned by Citigroup",
            "Davivienda"
        ],
        'Comoros': [
            "Development Bank of Comoros",
            "Federal Bank of Commerce",
            "Bank for Industry and Commerce",
            "Exim Bank (Comoros)",
            "New York Securities Bank",
            "Societe Nationale des Postes et Services Financiers",
            "Exim Bank Comores SA"
        ],
        'Congo': [
            "Advans Banque Congo",
            "Afriland First Bank",
            "Banque Commerciale du Congo, Kinshasa",
            "BGFIBank DRC",
            "Citibank",
            "Ecobank",
            "First International Bank",
            "Procredit Bank",
            "Rawbank",
            "Stanbic Bank",
            "Trust Merchant Bank",
            "United Bank for Africa",
            "Banque Commerciale Internationale (BCI)",
            "La Congolaise de Banque (LCB)",
            "Bangue Postale du Congo (BPC)",
            "Bank Congolaise de l’Habitat (BCH)"
        ],
        'Costa Rica': [
            "Banco Central de Costa Rica",
            "Banco Cathay de Costa Rica",
            "HSBC Costa Rica",
            "Banco Uno; owned by Citigroup",
            "BAC San José; owned by GE Capital",
            "Banco Improsa",
            "Banca Promérica",
            "Banco Lafise",
            "Banco BCT",
            "Scotiabank",
            "Banco Cuscatlan; owned by Citigroup",
            "Davivienda",
            "Banco de Costa Rica",
            "Banco Nacional de Costa Rica",
            "Banco Crédito Agrícola de Cartago",
            "BICSA"
        ],
        'Côte d’Ivoire': [
            "Bridge Bank Group – Côte d’Ivoire",
            "Atlantic Bank Group",
            "Citibank",
            "Ecobank",
            "Société Générale",
            "Standard Chartered Bank",
            "Bank of Africa"
        ],
        'Croatia': [
            "HPB – Stambena štedionica d.d.",
            "PBZ stambena štedionica d.d.",
            "Prva stambena štedionica d.d.",
            "Raiffeisen stambena štedionica d.d.",
            "Tesla štedna banka d.d.",
            "Wüstenrot stambena štedionica d.d.",
            "Addiko Bank d.d.",
            "Banka Kovanica d.d.",
            "Centar banka d.d.",
            "Croatia banka d.d.",
            "Erste & Steiermärkische Bank",
            "Hrvatska Poštanska Banka (HPB)",
            "Imex banka d.d.",
            "Istarska kreditna banka Umag d.d.",
            "J&T banka d.d.",
            "Jadranska banka d.d.",
            "Karlovačka banka d.d.",
            "KentBank d.d.",
            "Kreditna banka Zagreb d.d.",
            "OTP Bank",
            "Partner banka d.d.",
            "Podravska banka d.d.",
            "Primorska banka d.d.",
            "Privredna Banka (Intesa)",
            "Raiffeisenbank",
            "Samoborska banka d.d.",
            "Sberbank",
            "Slatinska banka d.d.",
            "Splitska banka d.d.",
            "Veneto banka d.d.",
            "Zagrebacka Banka (UniCredit)"
        ],
        'Cuba': [
            "Banco de Crédito y Comercio",
            "Banco de Inversiones",
            "Banco Exterior de Cuba",
            "Banco Financiero Internacional",
            "Banco Industrial de Venezuela-Cuba",
            "Banco Internacional de Comercio",
            "Banco Metropolitano",
            "Banco Nacional de Cuba",
            "Banco Popular de Ahorro",
            "Banco Bilbao Vizcaya Argentaria",
            "Banco Sabadell",
            "Bankia",
            "BPCE International et Outre-Mer",
            "Fransabank",
            "Havin Bank Ltd.",
            "National Bank of Canada",
            "Republic Bank",
            "Scotiabank"
        ],
        'Cyprus': [
            "Alpha Bank Cyprus",
            "Ancoria Bank",
            "AstroBank",
            "Bank of Cyprus",
            "Cyprus Cooperative Bank",
            "Cyprus Development Bank",
            "Eurobank Cyprus",
            "Hellenic Bank",
            "Housing Finance Corporation",
            "National Bank of Greece (Cyprus)",
            "RCB Bank",
            "Societe Generale Bank (Cyprus)",
            "USB Bank",
            "Arab Jordan Investment Bank",
            "Avtovazbank",
            "ABLV Bank",
            "Bank of Beirut",
            "BankMed",
            "Banque BEMO",
            "Banque SBA",
            "Barclays",
            "BBAC",
            "BLOM Bank",
            "Byblos Bank",
            "Central Cooperative Bank",
            "Credit Libanais",
            "EFG Bank (Luxembourg)",
            "Expobank",
            "FBME Bank",
            "First Investment Bank",
            "IBL Bank",
            "Jordan Ahli Bank",
            "Jordan Kuwait Bank",
            "Lebanon & Gulf Bank",
            "National Bank of Greece",
            "PrivatBank",
            "Promsvyazbank",
            "Saxo Bank",
            "Trasta Komercbanka",
            "Bank Of Cyprus"
        ],
        'Czech Republic': [
            "Air Bank (cs)",
            "Banka Creditas (cs)",
            "Česká exportní banka (cs)",
            "Česká spořitelna",
            "Českomoravská stavební spořitelna (cs)",
            "Českomoravská záruční a rozvojová banka (cs)",
            "Československá obchodní banka",
            "Equa bank (cs)",
            "Expobank CZ (cs)",
            "Fio banka (cs)",
            "Hypoteční banka (cs)",
            "J&T Banka (cs)",
            "Komerční banka",
            "Moneta Money Bank (cs)",
            "Modrá pyramida stavební spořitelna (cs)",
            "PPF banka",
            "Raiffeisen stavební spořitelna (cs)",
            "Raiffeisenbank (Czech Republic) (cs)",
            "Sberbank CZ (cs)",
            "Stavební spořitelna České spořitelny (cs)",
            "UniCredit Bank Czech Republic and Slovakia",
            "Wüstenrot – stavební spořitelna (cs)",
            "Wüstenrot hypoteční banka",
            "BNP Paribas Fortis",
            "BNP Paribas Personal Finance",
            "Bank Gutmann",
            "Bank of China (Hungary)",
            "Commerzbank",
            "Citibank Europe",
            "Deutsche Bank",
            "HSBC Bank",
            "ING Bank",
            "mBank",
            "MUFG Bank (Europe)",
            "Oberbank (de)",
            "Powszechna Kasa Oszczędności Bank Polski",
            "Raiffeisenlandesbank Oberösterreich (de)",
            "Poštová banka",
            "Raiffeisenbank im Stiftland",
            "Saxo Bank",
            "Sumitomo Mitsui Banking Corporation Europe",
            "Všeobecná úverová banka",
            "Waldviertler Sparkasse (de)",
            "Western Union International Bank",
            "ZUNO Bank AG"
        ],
        'Denmark': [
            "Finanstilsynet divides banks in size groups based on their working capital, with two additional groups for banks not based in Denmark",
            "Working capital DKK 65 billion or more.",
            "Danske Bank A/S",
            "Jyske Bank A/S",
            "Nordea Bank Danmark A/S",
            "Nykredit Bank A/S",
            "Sydbank A/S",
            "Working capital DKK 12 billion or more.",
            "Alm. Brand Bank A/S",
            "Arbejdernes Landsbank, Aktieselskab",
            "Den Jyske Sparekasse",
            "FIH Erhvervsbank A/S",
            "Jutlander Bank A/S",
            "Sparekassen Kronjylland",
            "Lån & Spar Bank A/S",
            "Ringkøbing Landbobank, Aktieselskab",
            "Saxo Bank A/S",
            "Sparekassen Sjælland",
            "Spar Nord Bank A/S",
            "Sparekassen Vendsyssel",
            "Vestjysk Bank A/S",
            "Working capital DKK 500 million or more.",
            "Basisbank A/S",
            "BRFkredit Bank A/S",
            "Broager Sparekasse",
            "Coop Bank A/S",
            "Danske Andelskassers Bank A/S",
            "Djurslands Bank A/S",
            "Dragsholm Sparekasse",
            "Dronninglund Sparekasse",
            "Ekspres Bank A/S",
            "Finansbanken A/S",
            "Folkesparekassen",
            "Frørup Andelskasse",
            "Frøs Herreds Sparekasse",
            "Frøslev-Mollerup Sparekasse",
            "Fynske Bank A/S",
            "Grønlandsbanken, Aktieselskab",
            "Hals Sparekasse",
            "Hvidbjerg Bank Aktieselskab",
            "Kreditbanken A/S",
            "Lægernes Pensionsbank A/S",
            "Landbrugets Finansieringsbank (LFB)",
            "Langå Sparekasse",
            "Lollands Bank, Aktieselskab",
            "Merkur, Den Almennyttige Andelskasse",
            "Middelfart Sparekasse",
            "Møns Bank, A/S",
            "Nordfyns Bank Aktieselskabet",
            "Nordjyske Bank A/S",
            "Nørresundby Bank A/S",
            "Nr. Nebel og Omegn, Sparekassen for",
            "Østjydsk Bank A/S",
            "PenSam Bank A/S",
            "Rise Sparekasse",
            "Rønde Sparekasse",
            "Salling Bank A/S",
            "Saxo Privatbank A/S",
            "Skjern Bank, Aktieselskabet",
            "Sparekassen Balling",
            "Sparekassen Bredebro",
            "Sparekassen Djursland",
            "Sparekassen Faaborg A/S",
            "Sparekassen Thy",
            "Totalbanken A/S",
            "Vorbasse-Hejnsvig Sparekasse",
            "Working capital DKK 500 million or less",
            "Andelskassen Fælleskassen",
            "Andelskassen OIKOS",
            "Borbjerg Sparekasse",
            "Fanø Sparekasse",
            "Faster Andelskasse",
            "Fjaltring-Trans Sparekasse",
            "Flemløse Sparekasse",
            "Klim Sparekasse",
            "Københavns Andelskasse",
            "Leasing Fyn Bank A/S",
            "Østervraa, J.A.K. Andelskassen",
            "PFA Udbetalingsbank",
            "Refsnæs Sparekasse",
            "Slagelse, Andelskassen J.A.K",
            "Søby-Skader-Halling Sparekasse",
            "Sønderhå-Hørsted Sparekasse",
            "Sparekassen Den lille Bikube",
            "Stadil Sparekasse",
            "Ulfborg Sparekasse"
        ],
        'Dominican': [
            "Banco Popular Dominicano",
            "Banco del Progreso ",
            "Banco Popular Dominicano",
            "Banco BHD Leon (Merged from Banco BHD and Banco Leon)",
            "Banco del Progreso",
            "Banco Santa Cruz",
            "Banco Caribe",
            "Banco BDI",
            "Banco Vimenca",
            "Banco Lopez de Haro",
            "Bancamérica",
            "Banco Atlántico",
            "Banco Federal",
            "FirstCaribbean International Bank (FCIB)",
            "The Bank of Nova Scotia (SCOTIABANK)",
            "Royal Bank of Canada (RBC)",
            "Banesco",
            "Scotiabank",
            "Banco Promerica"
        ],
        'Ecuador': [
            "Banco Amazonas",
            "Banco Bolivariano",
            "Banco Cofiec",
            "Banco Comercial de Manabí",
            "Banco de Guayaquil",
            "Banco de Loja",
            "Banco de Machala",
            "Banco del Austro",
            "Banco del Litoral",
            "Banco del Pacífico",
            "Banco Pichincha",
            "Banco Delbank",
            "Banco General Rumiñahui",
            "Banco Internacional",
            "Banco Finca",
            "ProCredit Bank",
            "Produbanco",
            "Banco Solidario",
            "Banco Sudamericano",
            "Citibank Ecuador",
            "Banco Promérica",
            "Banco Coopnacional",
            "Banco D-Miro",
            "Banco Capital"
        ],
        'Egypt': [
            "Al Ahli Bank Of Kuwait (ABK-Egypt)",
            "Banque du Caire",
            "Egyptian Arab Land Bank",
            "National Bank of Egypt",
            "Principal Bank for Development and Agricultural Credit",
            "Bank of Alexandria",
            "Misr Iran Development Bank",
            "Commercial International Bank (CIB)",
            "Barclays Bank Egypt",
            "Industrial Development & Workers Bank of Egypt",
            "Societe Arabe Internationale de Banque (SAIB)",
            "Blom Bank",
            "Credit Agricole Egypt",
            "Emirates NBD",
            "Suez Canal Bank",
            "Qatar National Bank Al Ahli",
            "Federal Arab Bank For Investment and Development",
            "Banque Misr",
            "Bank Audi",
            "Ahli United Bank",
            "Faisal Islamic Bank of Egypt",
            "Housing and Development Bank",
            "Al Baraka Bank Egypt",
            "National Bank of Kuwait – Egypt (NBK-Egypt)",
            "Abu Dhabi Islamic Bank (ADIB)",
            "Union National Bank Egypt (UNB-E)",
            "Egyptian Gulf Bank",
            "Arab African International Bank",
            "HSBC Bank Egypt",
            "Arab Banking Corporation",
            "Export Development Bank of Egypt",
            "United Bank -Egypt",
            "National Bank of Abu Dhabi",
            "Citibank",
            "Arab Bank Plc.",
            "Bank of Nova Scotia",
            "Arab Investment Bank (AIBK)",
            "Arab International Bank",
            "HSBC",
            "Mashreq Bank",
            "National Bank of Abu Dhabi",
            "National Bank of Egypt",
            "National Bank of Greece",
            "National Bank of Oman",
            "Piraeus Bank",
            "Société Générale",
            "Union National Bank"
        ],
        'El Salvador': [
            "Banco Hipotecario de El Salvador, S.A.",
            "Banco de Fomento Agropecuario",
            " Banco Agrícola S.A. ",
            "Banco Cuscatlán",
            "Banco Davivienda Salvadoreño, S.A.",
            "Scotiabank El Salvador S.A",
            "Banco de América Central S.A.",
            "Banco Citibank de El Salvador, S.A",
            "Banco de América Central, S.A.",
            "Banco Promérica, S.A.",
            "Banco G&T Continental El Salvador, S.A.",
            "Banco Industrial El Salvador, S.A.",
            "Banco Procredit, S.A.",
            "Banco Azteca El Salvador, S.A."
        ],
        'Equatorial Guinea': [
            "BGFIBank Equatorial Guinea (BGFIBank-EG)",
            "Commercial Bank Guinee Equatoriale (CBGE)",
            "Caisse Commune d’Epargne et d’Investissement Guinée Equatoriale (CCEI)",
            "TALLINNA ÄRIPANGA AS",
            "AS Inbank",
            "AS LHV Pank",
            "AS SEB Pank",
            "Swedbank AS",
            "Bigbank AS",
            "Luminor Bank AS",
            "Versobank AS",
            "BIGBANK",
            "Coop Pank",
            "TF Bank AB (publ.) Eesti filiaal",
            "Inbank",
            "AS UniCredit Bank Eesti filiaal ",
            "Danske Bank A/S Eesti filiaal",
            "Tallinna Äripank",
            "Versobank SA",
            "Folkefinans AS Eesti filiaal",
            "Nordea Bank AB Eesti filiaal ",
            "OP Corporate Bank plc Eesti filiaal",
            "Scania Finans AB Eesti filiaal",
            "Svenska Handelsbanken AB Eesti filiaal"
        ],
        'Ethiopia': [
            "BANKS",
            "National Bank of Ethiopia",
            "Awash International Bank",
            "Bank of Abyssinia",
            "Berhan International Bank",
            "Buna International Bank",
            "Commercial Bank of Ethiopia",
            "Construction and Business Bank",
            "Cooperative Bank of Oromia",
            "Dashen Bank",
            "Development Bank of Ethiopia",
            "Lion International Bank",
            "Nib International Bank",
            "Oromia International Bank",
            "United Bank (Ethiopia)",
            "Wegagen Bank",
            "Zemen Bank"
        ],
        'Fiji': [
            "HFC Bank Fiji ",
            "ANZ Bank Fiji",
            "Bank of Baroda",
            "Bank of South Pacific (BSP)",
            "HFC Bank Fiji"
        ],
        'Finland': [
            "Aktia Savings Bank ",
            "Bank of Åland ",
            "eQ Bank ",
            "Evli Bank ",
            "Helsinki OP Bank ",
            "Kaupthing Bank ",
            "Nordea Bank Finland ",
            "OP-Kotipankki ",
            "Pohjola Bank ",
            "S-Bank ",
            "Sampo Bank ",
            "SEB Gyllenberg Private Bank ",
            "Suomen AsuntoHypoPankki (Mortgage Society of Finland) ",
            "Tapiola Bank ",
            "Carnegie Investment Bank",
            "Citibank",
            "Crédit Agricole Corporate and Investment Bank",
            "Danske Bank (Finnish operations acquired through a merger with the originally Finnish Sampo Bank)",
            "Deutsche Bank",
            "DnB NOR",
            "Handelsbanken",
            "Forex Bank",
            "Skandinaviska Enskilda Banken",
            "Swedbank"
        ],
        'France': [
            "Credit Agricole",
            "Crédit du Nord",
            "Caisse d’Epargne",
            "Dexia Credit Local de France",
            "BNP Paribas",
            "Credit Agricole",
            "Societe Generale",
            "CIC",
            "Caisse D’Epargne",
            "Banque Populaire",
            "Credit Mutuel",
            "La Banque Postale",
            "LCL",
            "Credit Lyonnais (LCL) Bank",
            "Axa Banque",
            "Barclays France",
            "Deutsche Bank France",
            "HSBC France",
            "JP Morgan France",
            "Citibank",
            "Natixis Bank",
            "Banque Martin Maurel",
            "Crédit Mutuel",
            "Societe Generale ",
            " Banque Transatlantique"
        ],
        'Gabon': [
            "Alios Finance",
            "Banque de l’Habitat du Gabon (BHG)",
            "Banque Gabonaise de Developpement (BGD)",
            "BGFI Bank",
            "Banque Internationale pour le Commerce et l’Industrie au Gabon (BICIG)",
            "Citibank",
            "Ecobank",
            "ETS Finatra",
            "La Financiere Africaine de Micro-Projects (FINAM)",
            "Financial Bank Gabon",
            "FINATRA",
            "SOGACA",
            "Union Gabonaise de Banque (UGB)",
            "Banque Gabonaise et Française Internationale",
            "Banque Internationale pour le Gabon",
            "Banque Nationale de Crédit Rural",
            "Banque Populaire du Gabon",
            "United Bank for Africa"
        ],
        'Gambia': [
            "Oceanic Bank (Gambia) Limited.",
            "Prime Bank (Gambia) Ltd",
            "Skye Bank (Gambia) Ltd",
            "Ecobank (Gambia) Ltd",
            "Access Bank plc",
            "Arab Gambian Islamic Bank",
            "Bank PHB",
            "Banque Sahélo-Saharienne pour l’Investissement et le Commerce",
            "Ecobank",
            "First International Bank",
            "International Commercial Bank",
            "Guaranty Trust Bank",
            "Prime Bank (Gambia)",
            "Skye Bank",
            "Standard Chartered Bank",
            "Trust Bank Limited (Gambia)",
            "Zenith Bank"
        ],
        'Georgia': [
            "Liberty Bank",
            "TBC Bank ",
            "Bank of Georgia ",
            "Liberty Bank (Georgia)",
            "Basis Bank ",
            "VTB Bank of",
            "Cartu Bank ",
            "ProCredit Bank ",
            "Silk Road Bank ",
            "Investbank",
            "Isbank ",
            "Terabank ",
            "Halyk Bank ",
            "PASHA Bank Georgia ",
            "International Bank of Azerbaijan – Georgia ",
            "FINCA Bank ",
            "Credo Bank ",
            "Caucasus Development Bank ",
            "Ziraat Bank ",
            "PrivatBank",
            "VTB Bank Georgia",
            "CARTU BANK",
            "TBC Bank",
            "BTA BANK",
            "FINCA Bank Georgia",
            "Bank Constanta",
            "Terabank",
            "PASHA Bank"
        ],
        'Germany': [
            "BayernLB, Munich",
            "Commerzbank, Frankfurt",
            "Consorsbank, Nuremberg",
            "DAB BNP Paribas, Munich",
            "DekaBank Deutsche Girozentrale, Frankfurt",
            "Deutsche Bank, Frankfurt",
            "Deutsche Pfandbriefbank, Unterschleißheim (next to Munich)",
            "Deutsche Postbank, Bonn",
            "DZ Bank, Frankfurt",
            "GLS Bank, Bochum",
            "HSH Nordbank, Hamburg/Kiel (dual seat)",
            "Hypothekenbank Frankfurt, Frankfurt",
            "KfW",
            "Landesbank Baden-Württemberg, Stuttgart",
            "Landesbank Berlin Holding, Berlin",
            "Landesbank Hessen-Thüringen, Frankfurt",
            "N26, Berlin",
            "Landwirtschaftliche Rentenbank",
            "solarisBank, Berlin",
            "Nord/LB, Hanover",
            "NRW.Bank, Düsseldorf",
            "WestLB (As of 30 June 2012 WestLB was downsized and Portigon Financial Services AG became the legal successor of WestLB)",
            "Wirecard Bank",
            "WGZ Bank, Düsseldorf",
            "Allied Irish Banks, Frankfurt",
            "Anglo Irish Bank, Frankfurt",
            "Banco Santander, Mönchengladbach",
            "Barclays Bank, Hamburg",
            "BNP Paribas, Frankfurt",
            "Crédit Lyonnais, Frankfurt",
            "dev bank, Frankfurt",
            "Handelsbanken, Hamburg",
            "ING Group, Frankfurt",
            "Lloyds TSB, Frankfurt",
            "Royal Bank of Scotland, Frankfurt",
            "SEB AG, Frankfurt",
            "Société Générale, Frankfurt",
            "Hanseatic Bank, Hamburg",
            "UniCredit, Munich",
            "Creditanstalt, Munich",
            "HypoVereinsbank, Munich",
            "Bank of Communications , Frankfurt",
            "Bank Sepah , Frankfurt",
            "Citibank Private Customers, Dusseldorf (since December 2008 part of French Crédit Mutuel bank)",
            "Citigroup Global Markets Germany (Corporate Bank), Frankfurt",
            "Credit Suisse",
            "Goldman Sachs , Frankfurt",
            "ICICI Bank , Frankfurt",
            "JP Morgan , Frankfurt",
            "Lazard , Frankfurt",
            "Merrill Lynch , Frankfurt",
            "Mitsubishi UFJ , Frankfurt",
            "Mizuho Bank , Frankfurt",
            "Morgan Stanley",
            "National Bank of Pakistan , Frankfurt ",
            "State Bank of India , Frankfurt",
            "Sumitomo Mitsui Financial Group , Frankfurt",
            "UBS AG , Frankfurt",
            "Bankhaus C. L. Seeliger, Wolfenbüttel",
            "Bankhaus Lampe, Frankfurt",
            "Merck Finck & Co, Munich",
            "Bankhaus Löbbecke & Co, Frankfurt",
            "Donner & Reuschel, Hamburg, Munich",
            "Hauck & Aufhäuser, Frankfurt, Hamburg, Munich",
            "Berenberg Bank, Hamburg",
            "Bierbaum & Co, Frankfurt",
            "Degussa Bank, Frankfurt",
            "HSBC Trinkaus & Burkhardt AG",
            "IKB Deutsche Industriebank, Frankfurt",
            "Metzler Bank, Frankfurt",
            "Rothschild Investment Bank, Frankfurt",
            "Südwestbank AG, Stuttgart",
            "Von Linden Bank, Frankfurt"
        ],
        'Ghana': [
            "Access Bank plc",
            "African Investment Bank",
            "Agricultural Development Bank of Ghana",
            "AmalBank",
            "Bank of Baroda",
            "Banque Sahélo-Saharienne pour l’Investissement et le Commerce",
            "Barclays Bank",
            "CAL Bank",
            "Ecobank Ghana",
            "Energy Bank",
            "Fidelity Bank Ghana",
            "Ghana Commercial Bank",
            "Guaranty Trust Bank",
            "Home Finance Company",
            "Intercontinental Bank",
            "International Commercial Bank",
            "National Investment Bank",
            "Prudential Bank Limited",
            "Société Générale – Social Security Bank",
            "Stanbic Bank",
            "Standard Chartered Bank",
            "The Trust Bank",
            "UniBank",
            "United Bank for Africa",
            "UT Bank",
            "Zenith Bank",
            "The Royal Bank",
            "Ghana Commercial Bank",
            "Bank of Baroda (Ghana) Ltd.",
            "Barclays Bank Ghana" 
        ],
        'Greece': [
            "Alpha Bank",
            "Eurobank Ergasias",
            "National Bank of Greece",
            "Piraeus Bank",
            "B&N Bank, Greek Branch",
            "Bank of America",
            "Bank of Cyprus (Rep. Office)",
            "Bank Saderat Iran",
            "BMW Austria Bank (de)",
            "BNP Paribas Securities Services",
            "Citibank Europe",
            "Credit Suisse (Luxembourg)",
            "Deutsche Bank",
            "DVB Bank",
            "FCA Bank",
            "FCE Bank (de)",
            "Fimbank",
            "HSBC Bank",
            "HSH Nordbank",
            "Opel Bank",
            "ProCredit Bank (Bulgaria)",
            "The Royal Bank of Scotland",
            "UniCredit Bank",
            "Volkswagen Bank (de)",
            "Ziraat Bankası"
        ],
        'Guinea-Bissau': [
            "Banco Da Africa Ocidental",
            "Banco Da Uniao",
            "Banque Régionale de Solidarité",
            "Ecobank"
        ],
        'Guyana': [
            "Republic Bank (Guyana) Limited",
            "Guyana Bank for Trade & Industry Limited",
            "Bank of Nova Scotia",
            "Citizens Bank Guyana Inc.",
            "Demerara Bank Limited",
            "Excel Capital Inc",
            "Bank of Baroda (Guyana) Inc."
        ],
        'Haiti': [
            "Fonkoze",
            "Capital Bank (Haiti)",
            "Sogebank",
            "Capital Bank: Bank of New York (NY)",
            "BPH: Bank of America (NC), Citibank International (NY)",
            "BUH: Bank of New York (NY) , First Union (FL)",
            "BNC: Bank of New York (NY)(NC)",
            "Sogebank:  Bank of America (FL and NY)",
            "Unibank: Bank of America (FL), Bank of New York (NY), JPMorgan Chase Bank (FL)",
            "Banque de l’Union Haïtienne",
            "Unibank (Haiti)",
            "Citi "
        ],
        'Honduras': [
            "Banco Atlantida",
            "Banco FICOHSA",
            "Banco de Occidente",
            "Banco del Pais",
            "Banco BAC-Bamer",
            "Banco Promerica",
            "Banco de Los Trabajadores",
            "Banco Popular",
            "Banco Azteca",
            "Lloyds Bank",
            "HSBC"
        ],
        'Hong Kong': [
            "Licensed banks incorporated in Hong Kong",
            "Bank of China (Hong Kong)",
            "Bank of Communications",
            "Bank of East Asia, The",
            "China CITIC Bank International",
            "China Construction Bank (Asia)",
            "Chiyu Banking Corporation",
            "Chong Hing Bank",
            "Citibank (Hong Kong)",
            "Dah Sing Bank",
            "DBS Bank (Hong Kong)",
            "Fubon Bank (Hong Kong)",
            "Hang Seng Bank",
            "Hongkong and Shanghai Banking Corporation",
            "Industrial and Commercial Bank of China (Asia)",
            "Nanyang Commercial Bank",
            "OCBC Wing Hang Bank",
            "Public Bank (Hong Kong)",
            "Shanghai Commercial Bank",
            "Standard Chartered Bank (Hong Kong)",
            "Dah Sing Bank Limited",
            "Tai Yau Bank",
            "Wing Lung Bank",
            "Licensed banks incorporated outside Hong Kong",
            "ABN AMRO Bank N.V.",
            "Agricultural Bank of China",
            "Allahabad Bank",
            "Australia and New Zealand Banking Group",
            "Axis Bank",
            "Banca della Svizzera Italiana (BSI)",
            "Banca Monte dei Paschi di Siena",
            "Banco Bilbao Vizcaya Argentaria",
            "Banco Santander",
            "Bangkok Bank Public Co. Ltd.",
            "Bank J. Safra Sarasin",
            "Bank of America",
            "Bank of Baroda",
            "Bank of China",
            "Bank of Communications Hong Kong Branch",
            "Bank of India",
            "Bank Negara Indonesia",
            "Bank of New York Mellon, The",
            "Bank of Nova Scotia, The",
            "Bank of the Philippine Islands",
            "Bank of Taiwan",
            "Bank of Tokyo-Mitsubishi UFJ, The",
            "Bank of Singapore",
            "Bank SinoPac",
            "Barclays",
            "BDO Unibank",
            "BNP Paribas",
            "BNP Paribas Securities Services",
            "BNP Paribas Wealth Management",
            "Canadian Imperial Bank of Commerce",
            "Canara Bank",
            "Cathay Bank",
            "Cathay United Bank",
            "Chang Hwa Commercial Bank",
            "Chiba Bank, The",
            "China Construction Bank",
            "China Development Bank",
            "China Everbright Bank",
            "China Merchants Bank",
            "China Minsheng Banking Corporation",
            "Chugoku Bank, The",
            "CIMB Bank",
            "Citibank",
            "Commerzbank",
            "Commonwealth Bank of Australia",
            "Coutts & Co.",
            "Crédit Agricole",
            "Crédit Agricole",
            "Crédit Industriel et Commercial",
            "Credit Suisse",
            "CTBC Bank",
            "DBS Bank",
            "Deutsche Bank",
            "DZ Bank",
            "E.SUN Commercial Bank",
            "East West Bank",
            "Edmond de Rothschild (Suisse)",
            "EFG Bank",
            "Erste Group Bank",
            "Far Eastern International Bank",
            "Goldman Sachs",
            "Hana Bank",
            "HDFC Bank",
            "Hong Leong Bank",
            "HSBC Bank plc",
            "HSBC Bank USA",
            "UniCredit Bank AG",
            "ICICI Bank",
            "Indian Overseas Bank",
            "Industrial and Commercial Bank of China",
            "Industrial Bank of Korea",
            "Industrial Bank Co.",
            "ING Bank",
            "Intesa Sanpaolo",
            "JPMorgan Chase Bank",
            "Bank Julius Baer & Co.",
            "KBC Bank",
            "Korea Exchange Bank",
            "Land Bank of Taiwan",
            "LGT Bank (Liechtenstein)",
            "Lloyds Bank",
            "Macquarie Group Limited",
            "Mega International Commercial Bank",
            "Mashreq Bank",
            "Maybank",
            "Melli Bank",
            "Mizuho Bank",
            "National Australia Bank",
            "National Bank of Abu Dhabi",
            "National Bank of Pakistan",
            "Natixis",
            "Philippine National Bank",
            "Punjab National Bank",
            "Coöperatieve Centrale Raiffeisen-Boerenleenbank",
            "Raiffeisen Bank International",
            "Royal Bank of Canada",
            "Royal Bank of Scotland, The",
            "Royal Bank of Scotland N.V., The",
            "Shanghai Commercial and Savings Bank",
            "Shanghai Pudong Development Bank",
            "Shizuoka Bank",
            "Skandinaviska Enskilda Banken",
            "Société Générale",
            "Standard Bank",
            "Standard Chartered Bank",
            "State Bank of India",
            "State Street Bank and Trust Company",
            "Sumitomo Mitsui Banking Corporation",
            "Sumitomo Mitsui Trust Bank",
            "Svenska Handelsbanken",
            "Taipei Fubon Commercial Bank",
            "Taishin International Bank",
            "Taiwan Cooperative Bank",
            "Toronto-Dominion Bank",
            "Taiwan Shin Kong Commercial Bank",
            "Shinhan Bank",
            "UBS",
            "UCO Bank",
            "Union Bank of India",
            "United Overseas Bank",
            "Wells Fargo Bank",
            "Portigon",
            "Westpac Banking Corporation",
            "Woori Bank",
            "Restricted licence banks incorporated in Hong Kong",
            "Allied Banking Corporation (Hong Kong) Limited",
            "Bank of America Securities Asia Limited",
            "Bank of China International Limited",
            "Bank of Shanghai (Hong Kong) Limited",
            "Citicorp International Limited",
            "Habib Bank Zurich (Hong Kong) Limited",
            "J. P. Morgan Securities (Asia Pacific)",
            "KDB Asia",
            "Kookmin Bank Hong Kong",
            "Morgan Stanley Asia International Limited",
            "Orix Asia Limited",
            "RBC Capital Markets (Hong Kong)",
            "Scotiabank (Hong Kong)",
            "Société Générale Asia",
            "UBAF (Hong Kong)",
            "Restricted licence banks incorporated outside Hong Kong",
            "Bank Mandiri",
            "Bank of Ayudhya",
            "Kasikornbank",
            "Deposit-taking companies (all incorporated in Hong Kong)",
            "BCOM Finance (Hong Kong)",
            "BPI International Finance",
            "Chau’s Brothers Finance Company"
        ],
        'Hungary': [
            "OTP Bank",
            "K&H Bank",
            "Erste Bank",
            "Budapest Bank",
            "CIB Bank",
            "MKB Bank",
            "Raiffeisen Bank",
            "UniCredit Bank",
            "FHB Bank",
            "Pannon Takarék Bank",
            "Sberbank",
            "MagNet Bank",
            "MagNet Bank",
            "AXA Bank",
            "Banif Plus Bank",
            "BNP Paribas",
            "Cetelem Bank",
            "Cofidis",
            "ING Bank",
            "Bank of China",
            "Deutsche Bank ",
            "Commerzbank ",
            " KDB Bank"
        ],
        'Iceland': [
            "Iceland",
            "Allied Irish Banks",
            "Bank of Ireland",
            "KBC Bank Ireland (formerly IIB Bank)",
            "Permanent TSB",
            "Ulster Bank",
            "Arion Bank",
            "Kvika Banki",
            "Landsbankinn hf.",
            "Íslandsbanki hf.",
            "Sparisjóður Austurlands hf",
            "Sparisjóður Höfðhverfinga ses.",
            "Sparisjóður Strandamanna ses.",
            "Sparisjóður Suður-Þingeyinga ses."
        ],
        'India': [
            "Coastal Local Area Bank Ltd ",
            "Capital Local Area Bank Ltd",
            "Krishna Bhima Samruddhi Local Area Bank Ltd",
            "Subhadra Local Area Bank Ltd., Kolhapur",
            "Allahabad Bank",
            "Andhra Bank",
            "Axis Bank",
            "Bank of Bahrain and Kuwait",
            "Bank of Baroda – Corporate Banking",
            "Bank of Baroda – Retail Banking",
            "Bank of India",
            "Bank of Maharashtra",
            "Canara Bank",
            "Central Bank of India",
            "City Union Bank",
            "Corporation Bank",
            "Deutsche Bank",
            "Development Credit Bank",
            "Dhanlaxmi Bank",
            "Federal Bank",
            "ICICI Bank",
            "IDBI Bank",
            "Indian Bank",
            "Indian Overseas Bank",
            "IndusInd Bank",
            "ING Vysya Bank",
            "Jammu and Kashmir Bank",
            "Karnataka Bank Ltd",
            "Karur Vysya Bank",
            "Kotak Bank",
            "Laxmi Vilas Bank",
            "Oriental Bank of Commerce",
            "Punjab National Bank – Corporate Banking",
            "Punjab National Bank – Retail Banking",
            "Punjab & Sind Bank",
            "Shamrao Vitthal Co-operative Bank",
            "South Indian Bank",
            "State Bank of Bikaner & Jaipur",
            "State Bank of Hyderabad",
            "State Bank of India",
            "State Bank of Mysore",
            "State Bank of Patiala",
            "State Bank of Travancore",
            "Syndicate Bank",
            "Tamilnad Mercantile Bank Ltd.",
            "UCO Bank",
            "Union Bank of India",
            "United Bank of India",
            "Vijaya Bank",
            "Yes Bank Ltd",
            "Australia and New Zealand Banking Group Ltd",
            "National Australia Bank",
            "Westpac Banking Corporation",
            "Bank of Bahrain & Kuwait BSC",
            "AB Bank Ltd.",
            "Sonali Bank Ltd.",
            "Bank of Nova Scotia",
            "Industrial & Commercial Bank of China Ltd.",
            "BNP Paribas",
            "Credit Agricole Corporate & Investment Bank",
            "Societe Generale",
            "Deutsche Bank",
            "HSBC Ltd",
            "PT Bank Maybank Indonesia TBK",
            "Mizuho Bank Ltd.",
            "Sumitomo Mitsui Banking Corporation",
            "The Bank of Tokyo- Mitsubishi UFJ, Ltd.",
            "SBM Bank(Mauritius) Ltd",
            "Cooperatieve Rabobank U.A.",
            "Doha Bank",
            "Qatar National Bank",
            "JSC VTB Bank",
            "Sberbank",
            "DBS Bank Ltd.",
            "United Overseas Bank Ltd",
            "FirstRand Bank Ltd",
            "Shinhan Bank",
            "Woori Bank",
            "KEB Hana Bank",
            "Industrial Bank of Korea",
            "Bank of Ceylon",
            "Credit Suisse A.G",
            "CTBC Bank Co., Ltd.",
            "Krung Thai Bank Public Co. Ltd.",
            "Abu Dhabi Commercial Bank Ltd",
            "Mashreq Bank PSC",
            "First Abu Dhabi Bank PJSC",
            "Emirates Bank NBD",
            "Barclays Bank Plc.",
            "Standard Chartered Bank",
            "The Royal Bank of Scotland plc",
            "American Express Banking Corporation",
            "Bank of America",
            "Citibank N.A.",
            "J.P. Morgan Chase Bank N.A.",
            "Axis Bank",
            "Bandhan Bank",
            "Catholic Syrian Bank",
            "City Union Bank",
            "DCB Bank",
            "Dhanlaxmi Bank",
            "Federal Bank",
            "HDFC Bank",
            "ICICI Bank",
            "IndusInd Bank",
            "IDFC Bank",
            "Karnataka Bank",
            "Karur Vysya Bank",
            "Kotak Mahindra Bank",
            "Lakshmi Vilas Bank",
            "Nainital Bank",
            "RBL Bank",
            "South Indian Bank",
            "Tamilnad Mercantile Bank Limited",
            "Yes Bank"
        ],
        'Indonesia': [
            "Bank Negara Indonesia",
            "Bank Rakyat Indonesia",
            "PT Bank Tabungan Negara (Persero) Tbk.# (BTN)",
            "Bank Mandiri",
            "Bank Ekspor Indonesia",
            "The Royal Bank of Scotland, before known as ABN AMRO Bank (RBS Indonesia)",
            "Bank of America, N.A. ",
            "Bank of China Limited (Bank of China Indonesia)",
            "Citibank N.A. (Citibank Indonesia)",
            "Deutsche Bank AG. ",
            "JP. Morgan Chase Bank, N.A.",
            "Standard Chartered Bank ",
            "The Bangkok Bank Comp. Ltd ",
            "The Bank of Tokyo Mitsubishi UFJ LTD. ",
            "The Hongkong & Shanghai B.C.# (HSBC Indonesia)",
            "Bank Agroniaga",
            "Bank Akita",
            "Bank Alfindo",
            "Bank Anglomas Internasional (Merger pending with Wishart)",
            "Bank Antardaerah",
            "Bank Artos Indonesia",
            "Bank Bintang Manunggal",
            "Bank Bisnis Internasional",
            "Bank Centratama Nasional",
            "Bank CIC",
            "Bank Dipo International",
            "Bank Ekonomi Raharja",
            "Bank Fama Internasional",
            "Bank Ganesha",
            "Bank Harda Internasional",
            "Bank Harfa (Merger pending with Bank Panin)",
            "Bank Harmoni International (Merger pending with Bank Index Selindo)",
            "Bank IFI",
            "Bank Ina Perdana",
            "Bank Index Selindo (Merger pending with Bank Harmoni International)",
            "Bank Jasa Arta",
            "Bank Jasa Jakarta",
            "Bank Kesejahteraan Ekonomi",
            "Bank Liman International",
            "Bank Maspion",
            "Bank Mayora",
            "Bank Mestika Dharma",
            "Bank Metro Express",
            "Bank Mitraniaga",
            "Bank Multi Arta Sentosa",
            "Bank Persyarikatan Indonesia",
            "Bank Prima Master",
            "Bank Purba Danarta",
            "Bank Royal Indonesia",
            "Bank Sinar Harapan Bali (Merger pending with Bank Mandiri)",
            "Bank Sri Partha (Merger pending with Mercy Corp.)",
            "Bank Swaguna",
            "Bank Tabungan Pensiunan Nasional",
            "Bank UIB",
            "Bank Yudha Bhakti"
        ],
        'Iran': [
            "Bank Melli Iran",
            "Bank Sepah",
            "Post Bank of Iran",
            "Bank of Industry and Mine",
            "Bank Maskan",
            "Export Development Bank of Iran",
            "Qarzol-Hasaneh Mehr Iran Bank",
            "Keshavarzi Bank",
            "Qarzol-Hasaneh Resalat Bank",
            "Tose’e Ta’avon Bank",
            "BankMuscat Bank Muscat SAOG (Oman)",
            "Erste Bank (Austria)",
            "Europäisch-Iranische Handelsbank (de) (aka The Iran-Europe Commercial Bank)",
            "Future Bank",
            "Islamic Development Cooperation and Regional Investment Bank",
            "Raiffeisen Bank (Austria)",
            "Standard Chartered",
            "UCO Bank Ltd (India)",
            "Woori Bank (South Korea)",
            "Ansar Bank",
            "Ayandeh Bank",
            "Bank Mellat",
            "Bank Pasargad",
            "Bank Saderat Iran",
            "Bank Shahr",
            "Bank Day",
            "EN Bank",
            "Bank Hekmat Iranian",
            "Iran Zamin Bank",
            "Karafarin Bank",
            "Parsian Bank",
            "Refah Bank",
            "Saman Bank",
            "Sarmayeh Bank",
            "Sina Bank",
            "Tejarat Bank",
            "Tourism Bank",
            "Ghavamin Bank",
            "Middle East Bank"
        ],
        'Iraq': [
            "Rafidain Bank",
            "Rasheed Bank",
            "Industrial Bank of Iraq",
            "Agricultural Cooperative Bank of Iraq",
            "Real Estate Bank of Iraq",
            "Bank of Iraq",
            "Trade Bank of Iraq",
            "International Development Bank of Iraq (IDB)",
            "Ashur International Bank for Investment",
            "Albaraka Bank Turkey",
            "Kurdistan International Bank",
            "Ghana Bank",
            "Babylon Bank",
            "Bank of Baghdad",
            "Basrah International Bank for Investment",
            "Commercial Bank of Iraq",
            "Credit Bank of Iraq",
            "Dar Es Salaam Investment Bank",
            "Dijlah & Furat Bank",
            "Economy Bank Iraq",
            "Gulf Commercial Bank",
            "Industrial Union Investment Bank",
            "Investment Bank of Iraq",
            "Iraqi Middle East Investment Bank",
            "Islamic Bank",
            "Mosul Bank",
            "National Bank of Iraq",
            "North Bank",
            "Sumer Bank",
            "Union Bank of Iraq",
            "United Investment Bank",
            "T.C. Ziraat Bankasi of Turkey (the Turkish state agricultural bank)",
            "Bank Mili Iran (the national bank of Iran)",
            "Byblos Bank (Lebanese)",
            "Arab Banking Corporation (ABC) from Bahrain"
        ],
        'Ireland': [
            "Allied Irish Banks",
            "Bank of America Merrill Lynch International",
            "Bank of Ireland",
            "Bank of Montreal Ireland",
            "Barclays Bank Ireland",
            "Citibank Europe",
            "Dell Bank International",
            "DePfa Bank",
            "EBS",
            "Elavon Financial Services",
            "Hewlett-Packard International Bank",
            "Intesa Sanpaolo Bank Ireland",
            "JP Morgan Bank (Ireland)",
            "KBC Bank Ireland",
            "permanent tsb",
            "Scotiabank (Ireland)",
            "Ulster Bank Ireland",
            "UniCredit Bank Ireland",
            "Wells Fargo Bank International"
        ],
        'Israel': [
            "Major banks",
            "Bank Hapoalim",
            "Bank Leumi",
            "Bank Mizrahi-Tefahot",
            "First International Bank of Israel",
            "Israel Discount Bank",
            "Union Bank of Israel",
            "Other banks",
            "Arab Israel Bank",
            "Mercantile Discount Bank",
            "Bank of Jerusalem",
            "Bank Otsar Ha-Hayal",
            "Union Bank (Bank Igud)",
            "Bank Massad",
            "Bank Yahav",
            "Dexia Israel Bank",
            "Poaley Agudat Israel Bank",
            "U-Bank",
            "Postal Bank",
            "Postal Bank (Bank Ha-Doar)",
            "BNP Paribas Israel",
            "Citibank Israel",
            "HSBC Israel",
            "State Bank of India",
            "Barclays Bank"
        ],
        'Italy': [
            "Banca Antoniana Popolare Veneta",
            "Banca Cassa di Risparmio di Tortona",
            "Banca Commerciale Italiana",
            "Banca di Bologna",
            "Banca di Credito Cooperativo di Brescia",
            "Banca di Credito di Trieste",
            "Banca di Roma",
            "Banca Nazionale del Lavoro",
            "Banca Passadore & C.",
            "Banca Popolare Asolo e Montebelluna",
            "Banca Popolare dell’Emilia Romagna",
            "Banca Popolare di Bergamo – Credito Varesino",
            "Banca Popolare",
            "Banca Sella",
            "Banco Ambrosiano Veneto",
            "Banco di Napoli",
            "Banco di Sicilia",
            "BNP Paribas",
            "Cariplo S.p.A.",
            "CariPrato",
            "Cariri",
            "CaRiSpo",
            "Cassa di Risparmio di Torino – Banca CRT",
            "Cassa di Risparmio di Udine e Pordenone (CRUP)",
            "Cassa Rurale ed Artigiana di Cantu",
            "Credito Bergamasco",
            "Findomestic Banca",
            "Fondo Interbancario di Tutela dei Depositi (FITD)",
            "Intesa Sanpaolo",
            "Mediocredito Centrale",
            "Monte dei Paschi di Siena",
            "UniCredit",
            "Aareal Bank Ag",
            "Abc International Bank Plc Milan",
            "Akf Bank Gmbh & Co Kg",
            "Alpenbank AG",
            "Attijariwafa Bank Europe Italian Secondary Office",
            "Banca Farmafactoring Spa",
            "Banca Transilvania SA",
            "Banca Ubae SpA",
            "Banco Bilbao Vizcaya Argentaria SA (BBVA)",
            "Banco Do Brasil SA – Brasilia",
            "Bank Of America National Association",
            "Bank Of China Limited – Milan Branch",
            "Bank Of The Philippine Islands (Europe) Plc",
            "Bank Sepah",
            "Banque Populaire Cote D’Azur ",
            "Banque Psa Finance",
            "Barclays Bank Plc",
            "Bayerische Landesbank",
            "Bhw Bausparkasse Ag",
            "Binckbank NV",
            "Bmw Bank Gmbh",
            "Bnp Paribas Lease Group Sa",
            "Bnp Paribas Securities Services",
            "Bnp Paribas Succursale Italia",
            "Bsi Europe SA",
            "Carrefour Banque",
            "Citibank International Plc",
            "Citibank NA",
            "Commerzbank Ag",
            "Credit Agricole Corporate & Investment Bank",
            "Credit Suisse (Italy) SpA",
            "Credit Suisse Ag",
            "Depfa Bank Public Limited Company",
            "Europe Arab Bank Plc – Milan Branch",
            "Fce Bank Plc",
            "Hsbc Bank Plc",
            "Hypo Alpe-Adria-Bank SpA",
            "Hypothekenbank Frankfurt Ag",
            "Industrial And Commercial Bank Of China (Europe) S.A.",
            "Ing Bank N.V",
            "Ing Direct N.V.",
            "J.P. Morgan Securities Plc",
            "Jpmorgan Chase Bank, National Association",
            "La Compagnie Financiere Edmond De Rothschild Banque",
            "Merrill Lynch International Bank Limited – Milan Branch",
            "Morgan Stanley Bank International Limited – Milan Branch",
            "Natixis S.A.",
            "Nova Ljubljanska Banka D.D., Ljubljana",
            "Portigon Ag",
            "Societè Generale",
            "Standard Chartered Bank",
            "The Bank Of Tokyo – Mitsubishi Ufj, Ltd.",
            "The Royal Bank Of Scotland Plc",
            "Unicredit Bank Ag",
            "Union Bancaire Privee (Europe) S.A.",
            "Volkswagen Bank Gmbh"
        ],
        'Jamaica': [
            "First Global Bank",
            "Capital & Credit Merchant Bank (Parent-Capital & Credit Financial Group)",
            "MF&G Trust & Finance",
            "PanCaribbean Merchant Bank",
            "Scotia DBG",
            "The Bank of Nova Scotia (Parent -SCOTIABANK)",
            "Citibank Jamaica (Parent -CITIBANK)",
            "First Caribbean International Bank (Parent -CIBC)",
            "National Commercial of Jamaica (Parent -Portland Holdings)",
            "RBTT Jamaica Limited (Parent -Royal Bank of Trinidad & Tobago)"
        ],
        'Japan': [
            "Australia and New Zealand Banking Group",
            "Banco Bilbao Vizcaya Argentaria",
            "Banco do Brasil S.A.",
            "Bangkok Bank",
            "Bank of Communications",
            "Bank of India",
            "China Construction Bank",
            "Chinatrust Commercial Bank",
            "Commerzbank AG",
            "Commonwealth Bank of Australia",
            "DBS Bank",
            "Depfa Bank",
            "ING Bank",
            "Itaú Unibanco",
            "Korea Exchange Bank",
            "Lloyds Bank plc",
            "Metropolitan Bank and Trust Company",
            "National Australia Bank",
            "Oversea-Chinese Banking Corporation",
            "Philippine National Bank",
            "Bank Negara Indonesia",
            "Rabobank Nederland",
            "Standard Chartered Bank",
            "State Bank of India",
            "The Bank of Nova Scotia",
            "UniCredit",
            "Union de Banques Arabes et Françaises",
            "United Overseas Bank",
            "Wells Fargo Bank, N.A.",
            "WestLB AG",
            "Bank of America Merrill Lynch",
            "Bank of New York Mellon",
            "Barclays",
            "BNP Paribas",
            "Citi",
            "Crédit Agricole",
            "Credit Suisse",
            "Deutsche Bank",
            "HSBC",
            "JPMorgan Chase",
            "Royal Bank of Canada",
            "Société Générale",
            "State Street",
            "The Royal Bank of Scotland",
            "UBS AG"
        ],
        'Jordan': [
            "Arab Bank",
            "ABC Bank (Jordan)",
            "Bank of Jordan",
            "Cairo Amman Bank",
            "Capital Bank",
            "Jordan Commercial Bank",
            "Jordan Kuwait Bank",
            "Jordan Ahli Bank",
            "The Housing Bank for Trade & Finance",
            "Arab Jordan Investment Bank",
            "Invest Bank",
            "Société Générale",
            "Bank al Etihad",
            "European Bank for Reconstruction and Development",
            "Standard Chartered",
            "Egptian Arab Lank Bank",
            "HSBC",
            "Citibank",
            "Rafidain Bank",
            "National Bank of Kuwait",
            "BLOM Bank",
            "Bank Audi",
            "National Bank of Abu Dhabi",
            "Al-Rajhi Bank"
        ],
        'Kazakhstan': [
            "Almaty Merchant Bank",
            "Bank Kaspiyskiy",
            "Kazakhstan International Bank (KIB)",
            "Kazkommertsbank",
            "Bank CenterCredit",
            "BTA Bank",
            "DanaBank",
            "Sberbank",
            "Halyk Bank",
            "Temirbank",
            "Tbsesnabank",
            "Ziraat bank",
            "Citibank "
        ],
        'Kenya': [
            "ABC Bank (Kenya)",
            "Bank of Africa (Kenya)",
            "Bank of Baroda",
            "Bank of India",
            "Barclays Bank (Kenya)",
            "CfC Stanbic Holdings",
            "Chase Bank (Kenya)",
            "Citibank",
            "Commercial Bank of Africa",
            "Consolidated Bank of Kenya",
            "Cooperative Bank of Kenya",
            "Credit Bank",
            "Development Bank of Kenya",
            "Diamond Trust Bank",
            "Dubai Bank Kenya",
            "Ecobank Transnational",
            "Equatorial Commercial Bank",
            "Equity Bank",
            "Family Bank",
            "Fidelity Commercial Bank Limited",
            "First Community Bank",
            "Giro Commercial Bank",
            "Guaranty Trust Bank (Kenya)",
            "Guardian Bank",
            "Gulf African Bank",
            "Bank AL Habib",
            "Habib Bank AG Zurich",
            "Housing Finance Company of Kenya",
            "I&M Bank",
            "Imperial Bank Kenya",
            "Jamii Bora Bank",
            "K-Rep Bank",
            "Kenya Commercial Bank",
            "Middle East Bank Kenya",
            "National Bank of Kenya",
            "NIC Bank",
            "Oriental Commercial Bank",
            "Paramount Universal Bank",
            "Prime Bank (Kenya)",
            "Standard Chartered Kenya",
            "Trans National Bank Kenya",
            "United Bank for Africa",
            "Victoria Commercial Bank",
            "Bank of China",
            "Bank of Kigali",
            "Central Bank of India",
            "FirstRand Bank",
            "HDFC Bank",
            "Hong Kong and Shanghai Banking Corporation",
            "Nedbank"
        ],
        'Korea': [
            "Credit Union",
            "Industrial Bank of Korea (IBK)",
            "Korea Development Bank (KDB)",
            "Korea Federation of Community Credit Cooperatives",
            "Korea Post",
            "NH Nonghyup Bank (Held by National Agricultural Cooperative Federation of Korea)",
            "Suhyup (or Su-hyeop, the National Federation of Fisheries Cooperatives)",
            "KEB Hana Bank",
            "Kookmin Bank",
            "Shinhan Bank",
            "Woori Bank",
            "Busan Bank",
            "Daegu Bank",
            "Jeju Bank",
            "Jeonbuk Bank",
            "Citibank",
            "Deutsche Bank",
            "Hong Kong and Shanghai Banking Corporation (HSBC)",
            "Standard Chartered Bank Korea"
        ],
        'Kuwait': [
            "Apex bank of Kuwait",
            "The Industrial Bank of Kuwait",
            "Al Ahli Bank of Kuwait (ABK)",
            "Gulf Bank",
            "National Bank of Kuwait (NBK)",
            "The Bank of Kuwait & the Middle East (BKME)",
            "Bank of Bahrain and Kuwait",
            "Burgan Bank",
            "Citigroup Kuwait",
            "Commercial Bank of Kuwait",
            "Jordan Kuwait Bank",
            "Kuwait Finance House",
            "Boubyan Bank"
        ],
        'Kyrgyzstan': [
            "Manas Bank",
            "Commercial Bank KYRGYZSTAN",
            "Amanbank Kyrgyzstan",
            "Optima Bank",
            "Tolubay Bank",
            "RSK Bank",
            "BTA Bank Kyrgyzstan",
            "Demir Kyrgyz International Bank",
            "Dos Kredo Bank",
            "Eco Islamic Bank",
            "Bank of Asia Kyrgyzstan",
            "KyrgyzCredit Bank",
            "Bakai Bank",
            "Halyk Bank Kyrgyzstan",
            "National Bank of Pakistan Kyrgyzstan",
            "Kyrgyz Investment and Credit Bank",
            "Finance Credit Bank KAB",
            "Aiyl Bank",
            "Capital Bank Kyrgyzstan",
            "Rosinbank",
            "Bai-Tushum Bank",
            "Kyrgyz-Swiss Bank",
            "Finca Bank Kyrgyzstan"
        ],
        'Latvia': [
            "Rietumu Banka",
            "Citadele Banka",
            "Norvik Banka",
            "Baltic International Bank",
            "BlueOrange",
            "Latvijas Pasta Banka",
            "Bank M2M Europe",
            "Meridian Trade Bank",
            "Reģionāla investīciju banka",
            "Swedbank",
            "SEB banka",
            "Privatbank",
            "Luminor Bank (Latvija)",
            "Svenska Handelsbanken",
            "Danske Bank",
            "Bigbank",
            "OP Corporate Bank",
            "Scania Finans Aktiebolag",
            "Aktsiaselts Eesti Krediidipank",
            "Nordea Bank"
        ],
        'Lebanon': [
            "Audi Saradar Bank S.A.L",
            "Bank Med S.A.L",
            "Bank of Beirut S.A.L.",
            "BLOM Bank S.A.L.",
            "Byblos Bank S.A.L.",
            "Citibank, N.A.",
            "Crédit Libanais S.A.L.",
            "Federal Bank of Lebanon S.A.L.",
            "Fransabank S.A.L.",
            "Arab Finance House S.A.L.",
            "Banca Di Roma S.P.A",
            "Bank of Kuwait And The Arab World S.A.L.",
            "Banque Libano-Française S.A.L.",
            "Banque Nationale de Paris “Intercontinentale”",
            "HSBC Bank Middle East Limited",
            "Intercontinental Bank of Lebanon S.A.L.",
            "Lebanon & Gulf Bank S.A.L.",
            "Lebanese Canadian Bank S.A.L.",
            "Lebanese Islamic Bank S.A.L.",
            "Lebanese Swiss Bank S.A.L.",
            "National Bank of Kuwait (Lebanon) S.A.L.",
            "Saderat Bank of Iran",
            "Société Nouvelle de la BANQUE de SYRIE et du LIBAN S.A.L.",
            "Standard Chartered Bank S.A.L.",
            "Syrian Lebanese Commercial Bank S.A.L.",
            "FFA Private Bank"
        ],
        'Lesotho': [
            "First National Bank (South Africa)",
            "Nedbank",
            "Standard Bank"
        ],
        'Liberia': [
            "Access Bank Liberia",
            "Ecobank Liberia",
            "First International Bank (Liberia)",
            "Global Bank Liberia",
            "Guaranty Trust Bank",
            "International Bank",
            "Liberian Bank for Development and Investment",
            "United Bank for Africa"
        ],
        'Libya': [
            "Umma Bank",
            "Aman Bank for Commerce & Development",
            "Banque Sahélo-Saharienne pour l’Investissement et le Commerce",
            "Alejmaa Alarabi Bank",
            "Savings and Real Estate Bank of Libya",
            "Jamahiriya Bank",
            "National Commercial Bank",
            "Libyan Development Bank",
            "Mediterranean Bank",
            "Al-Wafa Bank",
            "National Banking Corporation",
            "Libyan Arab Foreign Bank",
            "Sahara Bank",
            "Alsaraya Trading And Devolpment Bank",
            "Tripoli Agricultural Bank",
            "National Agricultural Bank of Libya",
            "Wahda Bank"
        ],
        'Lithuania': [
            "Luminor AB DNB bankas and Nordea (part of DNB ASA, Norway)",
            "AB SEB bankas (subsidiary of SEB, Sweden)",
            "AB Šiaulių bankas (Lithuania)",
            "AB Swedbank (part of Swedbank, Sweden)",
            "Citadele Bank (part of Citadele banka, Latvia)",
            "UAB Medicinos bankas (Lithuania)",
            "AS “Meridian Trade Bank” Lithuanian branch",
            "BIGBANK AS branch",
            "Danske Bank A/S Lithuania Branch",
            "Nordea Bank AB Lithuania Branch",
            "Pohjola Bank plc Lithuanian Branch",
            "Scania Finans AB Lithuanian Branch (financing and insurance for Scania commercial vehicles)",
            "Skandinaviska Enskilda Banken AB, Vilniaus Branch",
            "Svenska Handelsbanken AB Lithuania Branch",
            "Baltikums Bank "
        ],
        'Luxembourg': [
            "Advanzia Bank",
            "Banque de Luxembourg",
            "Banque et Caisse d’Épargne de l’État",
            "Banque Internationale à Luxembourg",
            "Banque Raiffeisen",
            "BGL BNP Paribas",
            "Central Bank of Luxembourg",
            "Internal Audit Department, Luxembourg",
            "KBL European Private Bankers",
            "Precision Capital",
            "Société Nationale de Crédit et d’Investissement",
            "Societe Generalle",
            "Ing",
            "Intesa San Paolo",
            " Deutsche Bank",
            "BCEE",
            " Societe Generale",
            "BGL BNP Paribas",
            " BIL",
            "UniCredit",
            " Intesa Sanpaolo"
        ],
        'Macao': [
            "Banks incorporated in Macau",
            "OCBC Wing Hang Bank Limited – Banco Weng Hang, S.A.",
            "Banco Delta Asia Limited – Banco Delta Ásia, S.A.R.L.",
            "China Construction Bank (Macau) Corporation Limited – Banco de Construcao da China (Macau), S.A.",
            "Industrial and Commercial Bank of China (Macau) – Banco Industrial e Comercial da China (Macau), S.A.",
            "Luso International Banking Limited – Banco Luso Internacional, S.A.",
            "Banco Comercial de Macau, S.A. – Banco Comercial Português, S.A.",
            "The Macau Chinese Bank Ltd. – Banco Chinês de Macau, S.A.",
            "Banco Nacional Ultramarino, S.A. – Banco Nacional Ultramarino, S.A.",
            "Novo Banco Asia, S.A. – Novo Banco Ásia, S.A.",
            "Branches of banks incorporated outside Macau",
            "Bank of China Limited – Bank of China Limited",
            "Standard Chartered Bank – Standard Chartered Bank",
            "Guangdong Development Bank Co., Ltd. – Banco de Desenvolvimento de Cantão, S.A.",
            "Bank SinoPac Company Limited – Banco SinoPac company Limited",
            "Chong Hing Bank Limited – Chong Hing Bank Limited",
            "The Bank of East Asia Limited – Banco da East Asia, Limitada",
            "Hang Seng Bank Limited – Hang Seng Bank Limited",
            "CITIC Ka Wah Bank Limited – CITIC Ka Wah Bank Limited",
            "Banco Comercial Português, S.A. – Banco Comercial Português, S.A",
            "Subsidiary of banks incorporated outside Macau",
            "Caixa Geral de Depósitos – Subsidiária Offshore de Macau, S.A"
        ],
        'Macedonia': [
            "AL KOSA – Stip",
            "AM – Skopje",
            "Bavag d.o.o.- Skopje",
            "Fersped d.o.o. – Skopje",
            "FULM stedilnica d.o.o.-Skopje ",
            "Gragjanska stedilnica – Skopje",
            "Inko d.o.o. – Skopje ",
            "Interfalko – Skopje",
            "Peon – Strumica",
            "Mak- BS – Skopje",
            "Mladinec d.o.o. – Skopje",
            "Moznosti – Skopje",
            "Alpha Bank AD Skopje",
            "Centralna Kooperativna Banka AD Skopje",
            "Eurostandard Bank AD Skopje",
            "Halkbank AD Skopje",
            "Kapital Banka AD Skopje",
            "Komercijalna Banka AD Skopje",
            "Stater Banka AD Kumanovo",
            "Macedonian Bank for Development Promotion AD Skopje",
            "NLB Tutunska banka AD Skopje",
            "Ohridska Banka AD Ohrid",
            "Poštenska Banka AD Skopje",
            "Procredit Bank AD Skopje",
            "Sparkasse Bank AD Skopje",
            "Stopanska Banka AD Bitola",
            "Stopanska Banka AD Skopje",
            "TTK Banka AD Skopje",
            "Univerzalna Investiciona Banka AD Skopje",
            "Bank Austria Creditanstalt AG Representative Office – Skopje"
        ],
        'Madagascar': [
            "Access Bank plc",
            "Bank Negara Indonesia",
            "Bank of Africa",
            "BGFIBank Group",
            "MCB Madagascar",
            "Société Générale",
            "State Bank of Mysore",
            "OTIV de la province de Toamasina Zone Littoral",
            "Bank of Africa",
            "Caisse d’épargne de crédit mutuel agricole (CECAM)",
            "Banque Malgache de L’ocean Indien",
            "OTIV DIANA",
            "BFV-Societe Generale",
            "Bank Negara Indonesia",
            "State Bank of Mysore",
            "Mauritius Commercial Bank",
            "Tahiry Ifamonjena Amin’ny Vola (TIAVO)",
            "Action pour le Développement et le Financement des micro-entreprises (ADéFi)",
            "Access Bank",
            "Association d’épargne et de crédit autogérée (AECA)",
            "BGFIBank Madagascar",
            "OTIV Antananarivo",
            "Banque Industrielle et Commerciale de Madagascar",
            "OTIV Zone Alaotra Mangoro",
            "OTIV SAVA",
            "Madagascar Microfinance Bank"
        ],
        'Malawi': [
            "National Bank of Malawi",
            "Standard Bank Malawi",
            "NBS Bank",
            "First Merchant Bank",
            "Nedbank",
            "Ecobank",
            "FDH Bank",
            "CDH Investment Bank",
            "New Finance Bank",
            "Leasing and Finance Company",
            "National Bank of Malawi",
            "Indebank",
            "NBS Bank",
            "Reserve Bank of Malawi",
            "Nedbank",
            "Standard Bank Malawi",
            "Malawi Savings Bank",
            "Continental Discount House",
            "Ecobank",
            "First Merchant Bank",
            "FDH Bank",
            "Opportunity International Bank Malawi",
            "First Discount House Limited",
            "International Commercial Bank",
            "National Finance Company"
        ],
        'Malaysia': [
            "Affin Bank Berhad",
            "Alliance Bank Malaysia Berhad",
            "AmBank (M) Berhad",
            "CIMB Bank Berhad",
            "Hong Leong Bank Berhad",
            "Malayan Banking Berhad",
            "Public Bank Berhad",
            "RHB Bank Berhad",
            "Affin Bank",
            "Agro Bank",
            "Alliance Bank Malaysia Berhad",
            "AmBank",
            "Bank Islam Malaysia",
            "Bank Muamalat Malaysia",
            "Bank Rakyat",
            "Bank Simpanan Nasional (BSN)",
            "CIMB Bank Berhad",
            "Hong Leong Bank",
            "Malayan Banking Berhad (Maybank)",
            "Public Bank",
            "RHB Bank",
            "BNP Paribas Malaysia Berhad",
            "Bangkok Bank Berhad",
            "Bank of America Malaysia Berhad",
            "Bank of China (Malaysia) Berhad",
            "Bank of Tokyo-Mitsubishi UFJ (Malaysia) Berhad",
            "China Construction Bank (Malaysia) Berhad ",
            "Citibank Berhad",
            "Deutsche Bank (Malaysia) Berhad",
            "HSBC Bank Malaysia Berhad",
            "India International Bank (Malaysia) Berhad",
            "Industrial and Commercial Bank of China (Malaysia) Berhad",
            "J.P. Morgan Chase Bank Berhad",
            "Mizuho Bank (Malaysia) Berhad",
            "National Bank of Abu Dhabi Malaysia Berhad",
            "OCBC Bank (Malaysia) Berhad",
            "Standard Chartered Bank Malaysia Berhad",
            "Sumitomo Mitsui Banking Corporation Malaysia Berhad",
            "The Bank of Nova Scotia Berhad",
            "The Royal Bank of Scotland Berhad (Left Malaysia) ",
            "United Overseas Bank (Malaysia) Bhd."
        ],
        'Malta': [
            "Akbank T.A.S. ",
            "APS Bank Limited ",
            "Banif Bank (Malta) plc ",
            "Bank of Valletta plc ",
            "BAWAG Malta Bank Limited ",
            "CommBank Europe Limited ",
            "Credorax Bank (Malta) Limited ",
            "Deutsche Bank (Malta) Limited ",
            "Erste Bank (Malta) Limited ",
            "FCM Bank Limited ",
            "FIMBank plc ",
            "Fortis Bank Malta Limited ",
            "HSBC Bank Malta plc ",
            "IIG Bank (Malta) Limited ",
            "Investkredit International Bank plc ",
            "Izola Bank plc ",
            "Lombard Bank Malta plc ",
            "Mediterranean Bank plc ",
            "NBG Bank Malta Limited ",
            "Novum Bank Limited ",
            "Pilatus Bank Ltd. ",
            "Raiffeisen Malta plc ",
            "Satabank plc ",
            "Sparkasse Bank Malta plc ",
            "Turkiye Garanti Bankasi A S ",
            "Nordea Bank AB Malta ",
            "Volksbank Malta Limited ",
            "Go Bank Malta Limited "
        ],
        'Mauritius': [
            "ABC Banking Corporation",
            "AfrAsia Bank Limited",
            "Bank One",
            "National Commercial Bank",
            "Banque des Mascareignes",
            "BanyanTree Bank Limited",
            "SBI Mauritius",
            "Century Banking Corporation",
            "State Bank of Mauritius",
            "Development Bank of Mauritius",
            "The Hongkong and Shanghai Banking Corporation",
            "Mauritius Bank",
            "Investec Bank",
            "Mauritius Commercial Bank",
            "Mauritius Post and Cooperative Bank",
            "Standard Bank",
            "Standard Chartered Bank",
            "Bank of Baroda",
            "Barclays Bank",
            "Deutsche Bank",
            "Habib Bank Limited",
            "Bank Internasional Indonesia"
        ],
        'Mexico': [
            "Banca Mifel",
            "Banco Autofin",
            "Banco Amigo",
            "Banca Afirme",
            "Banco Multiva",
            "Bansi S.A.",
            "Banco Ahorro Famsa",
            "Bancoppel",
            "Banco Monex",
            "Banco Azteca",
            "Banco del Bajio",
            "Banco Inbursa",
            "Banco Interacciones",
            "Banco Invex",
            "Banco Ve X +",
            "Banorte",
            "Banregio",
            "Ixe Banco",
            "Banco Compartamos",
            "Actinver",
            "Banco Facil (Chedraui)",
            "Banco BASE",
            "BBVA Bancomer",
            "Banamex Citibank",
            "Banco Santander, formerly Banco Santander Serfin",
            "Banco Volkswagen Mexico",
            "Banco Wal-Mart de Mexico Adelante",
            "HSBC Mexico",
            "Mitsubishi Bank",
            "Scotiabank Inverlat",
            "ING Bank",
            "UBS Bank"
        ],
        'Moldova': [
            "BCR Chișinău",
            "Comerțbank",
            "Energbank",
            "EuroCreditBank",
            "EximBank",
            "FinComBank",
            "MobiasBanca",
            "ProCredit Bank",
            "Moldova Agroindbank",
            "Banca de Economii",
            "InvestPrivatBank",
            "Victoria Bank",
            "National Bank of Moldova (State central bank)",
            "Moldindconbank",
            "UniversalBank",
            "MobiasBanca",
            "UniBank",
            "Banca Socială",
            "Banca Comercială Română"
        ],
        'Mongolia': [
            "Bank of Mongolia",
            "Trade and Development Bank of Mongolia",
            "TransBank of Mongolia",
            "National Investment Bank",
            "The State bank",
            "Capital Bank of Mongolia",
            "Capitron Bank of Mongolia",
            "Credit Bank",
            "Golomt Bank",
            "Arig Bank",
            "XacBank",
            "Ulaanbaatar city bank",
            "Chinggis Khaan bank",
            "Bogd bank",
            "Khan bank",
            "The Development bank of Mongolia "
        ],
        'Morocco': [
            "Banque Populaire du Maroc",
            "BMCE Bank",
            "Société Générale Maroc",
            "BMCI",
            "Crédit Agricole du Maroc",
            "Crédit du Maroc",
            "CIH Bank"
        ],
        'Mozambique': [
            "BancABC",
            "Banco Comercial e de Investimentos (BCI)",
            "Banco Mercantil e de Investimentos (BMI)",
            "Banco Nacional de Investimentos (BNI) (National Investment Bank)",
            "Banco Tchuma",
            "Banco Terra",
            "Banco Société Générale Moçambique (SGM)",
            "Banco Unico",
            "Barclays Bank",
            "First National Bank Mozambique",
            "First Capital Bank (FCB)",
            "Millennium BIM (BIM)",
            "Moza Banco",
            "Opportunity Bank Mozambique",
            "Procredit Bank",
            "Socremo Microfinance Bank",
            "Standard Bank",
            "United Bank for Africa"
        ],
        'Namibia': [
            "Bank Windhoek",
            "FIDES Bank Namibia",
            "First National Bank (South Africa)",
            "Nedbank",
            "Standard Bank"
        ],
        'Nepal': [
            "Agriculture Development Bank Limited",
            "Bank of Kathmandu Limited",
            "Century Bank Limited",
            "Citizens Bank International Limited",
            "Civil Bank Limited (in merger process with Int’l Leasing & Fin, Co. Ltd.)",
            "Everest Bank Limited",
            "Global IME Bank Limited",
            "Himalayan Bank Limited",
            "Janata Bank Nepal Limited",
            "Laxmi Bank Limited",
            "Machhapuchchhre Bank Limited",
            "Mega Bank Nepal Limited",
            "Nabil Bank Limited",
            "NCC Bank)",
            "Kumari Bank Limited (in merger process with NCC Bank)",
            "Nepal Credit and Commerce Bank Limited (in merger process with Kumari Bank)",
            "Nepal Bangladesh Bank Limited",
            "Nepal Bank Limited",
            "Nepal Investment Bank Limited",
            "Nepal SBI Bank Limited",
            "NIC Asia Bank Limited",
            "NMB Bank Nepal Limited",
            "Prabhu Bank Limited",
            "Prime Commercial Bank Limited",
            "Rastriya Banijya Bank Limited",
            "Sanima Bank Limited",
            "Siddhartha Bank Limited",
            "Standard Chartered Bank Nepal Limited",
            "Sunrise Bank Limited",
            "Agriculture Development Bank",
            "Nepal Bank Limited",
            "Rastriya Banijya Bank",
            "Nepal SBI Bank",
            "Standard Chartered Bank"
        ],
        'Netherlands': [
            "Amsterdam Trade Bank",
            "Anadolubank Nederland N.V.",
            "ASN Bank",
            "Bank Mendes Gans",
            "Bank Nederlandse Gemeenten",
            "BinckBank",
            "bunq",
            "Credit Europe Bank",
            "Demir Halk Bank",
            "Friesland Bank",
            "GarantiBank International NV",
            "GE Artesia Bank",
            "Kempen & Co",
            "Knab",
            "Nederlandse Waterschapsbank",
            "Netherlands Development Finance Company",
            "NIBC Bank",
            "SNS Bank",
            "Triodos Bank",
            "Van Lanschot",
            "Yapi Kredi Bank Nederland N.V.",
            "Deutsche Bank",
            "Royal Bank of Scotland",
            "Argenta"
        ],
        'New Zealand': [
            "NZ National Bank Limited (ANZ National Bank New Zealand)",
            "ASB Bank Limited (owned by the Commonwealth Bank of Australia)",
            "BankDirect (subsidiary of ASB Bank)",
            "Bank of New Zealand Limited (owned by National Australia Bank)",
            "Westpac New Zealand Limited (owned by Westpac Banking Corporation in Australia)",
            "Heartland Bank",
            "Kiwibank Limited",
            "Rabobank New Zealand Limited",
            "SBS Bank",
            "TSB Bank Limited",
            "Bank of New Zealand",
            "ANZ Bank New Zealand",
            "ASB Bank",
            "Westpac",
            "Heartland Bank",
            "Kiwibank",
            "SBS Bank",
            "TSB Bank",
            "Bank of Baroda",
            "Bank of China",
            "Bank of India",
            "China Construction Bank",
            "Citibank, N.A.",
            "Commonwealth Bank of Australia",
            "Deutsche Bank AG",
            "Industrial and Commercial Bank of China",
            "Kookmin Bank",
            "Rabobank Nederland",
            "The Bank of Tokyo-Mitsubishi UFJ",
            "Hongkong and Shanghai Banking Corporation",
            "Westpac Banking Corporation"
        ],
        'Nicaragua': [
            "Banco de América Central",
            "Banco de Finanzas",
            "Banco de la Producción",
            "Banco Lafise Bancentro",
            "Banco de Fomento a la Producción (Produzcamos)",
            "Citi, United States of America",
            "Banco Procredit, Germany"
        ],
        'Niger': [
            "Bank of Africa Niger",
            "Banque Atlantique Niger",
            "Banque Régionale de Solidarité Niger",
            "Banque Sahélo-Saharienne pour l’Investissement et le Commerce (BSSIC)",
            "Ecobank Niger",
            "Crédit du Niger",
            "Banque Internationale pour l’Afrique au Niger",
            "Banque Commerciale du Niger",
            "Banque Islamique du Niger pour le Commerce et l’Investissement",
            "Société Nigérienne de Banque"
        ],
        'Nigeria': [
            "Access Bank – acquired Intercontinental Bank",
            "Citibank",
            "Diamond Bank",
            "Ecobank Nigeria – acquired Oceanic Bank",
            "Fidelity Bank Nigeria",
            "First Bank of Nigeria",
            "First City Monument Bank – acquired FinBank",
            "Guaranty Trust Bank",
            "Heritage Bank plc – acquired Enterprise Bank (formerly Spring Bank) ",
            "Keystone Bank Limited – formerly Bank PHB",
            "Providus Bank plc ",
            "Skye Bank – acquired Mainstreet Bank Limited(formerly Afribank Nig Plc)",
            "Stanbic IBTC Bank Nigeria Limited",
            "Standard Chartered Bank",
            "Sterling Bank – acquired Equitorial Trust Bank",
            "Suntrust Bank Nigeria Limited",
            "Union Bank of Nigeria",
            "United Bank for Africa",
            "Unity Bank plc",
            "Wema Bank",
            "Zenith Bank",
            "Barclays Bank plc",
            "Deutsche Bank",
            "JP Morgan"
        ],
        'Norway': [
            "Bank2",
            "Bank Norwegian AS",
            "Bolig- og Næringsbanken",
            "Cresco",
            "DnB NOR Bank",
            "Landkreditt Bank",
            "Netfonds Bank",
            "Nordea Bank Norge",
            "Nordlandsbanken",
            "Santander Consumer Bank",
            "Sbanken",
            "Pareto Bank",
            "SEB Privatbanken",
            "Storebrand Bank",
            "Verdibanken",
            "Voss Veksel- og Landmandsbank",
            "yA Bank",
            "Aktiv Kapital",
            "BMW Financial Services",
            "BNP Paribas",
            "Carnegie Investment Bank",
            "Citibank",
            "Danske Bank",
            "De Lage Landen",
            "DVB Bank",
            "Ford Financial",
            "Forex Bank",
            "Fortis",
            "GE Money Bank",
            "GMAC Bank",
            "Handelsbanken",
            "IBM Credit",
            "Nordnet",
            "Scania Finans",
            "Siemens Financial Services",
            "Skandinaviska Enskilda Banken",
            "SVEA Finans",
            "Swedbank",
            "Toyota Kreditbank"
        ],
        'Oman': [
            "Alizz Islamic Bank",
            "Bank Muscat",
            "National Bank of Oman",
            "Oman Arab Bank",
            "Bank Dhofar",
            "Ahli Bank",
            "HSBC Oman",
            "Bank Nizwa",
            "Bank Sohar SAOG",
            "Al Madina Financial & Investment Services.",
            "Alliance Housing Bank.",
            "Arab Bank.",
            "Bank Of Baroda.",
            "Citi Bank.",
            "Hsbc Bank.",
            "Oman Arab Bank.",
            "Standard Chartered Bank.",
            "Bank Muscat"
        ],
        'Pakistan': [
            "Bank of Punjab",
            "First Women Bank",
            "National Bank of Pakistan",
            "Sindh Bank",
            "Bank of Tokyo – Mitsubishi UFG",
            "Citi Bank N.A",
            "Industrial and Commercial Bank of China Limited",
            "Standard Chartered Pakistan",
            "Bank of China",
            "Samba Bank Limited",
            "Allied Bank of Pakistan, Karachi",
            "Askari Bank, Rawalpindi",
            "Bank AL Habib, Karachi",
            "Bank Alfalah, Karachi",
            "Bank of Punjab, Lahore",
            "Barclays Bank, Karachi",
            "Faysal Bank, Karachi",
            "Habib Metropolitan Bank, Karachi",
            "Habib Bank, Karachi",
            "HSBC",
            "JS Bank",
            "KASB Bank, Karachi",
            "MCB Bank Limited (formerly Muslim Commercial Bank), Islamabad",
            "MyBank Limited, acquired by and merged with Summit Bank, Karachi",
            "NIB Bank, Karachi",
            "Samba Bank, Karachi",
            "Silk Bank formerly Saudi Pak Non-Commercial Bank, Karachi",
            "Soneri Bank, Karachi",
            "Summit Bank, Karachi",
            "United Bank, Karachi",
            "Al Baraka Bank (Pakistan) Limited",
            "Askari Bank Limited",
            "Bank Alfalah Limited",
            "Bank AL Habib Limited",
            "BankIslami Pakistan Limited",
            "Burj Bank Limited",
            "Dubai Islamic Bank Pakistan Limited",
            "Faysal Bank Limited",
            "Habib Metropolitan Bank Limited",
            "JS Bank Limited",
            "KASB Bank Limited",
            "Meezan Bank Limited",
            "NIB Bank Limited",
            "Samba Bank Limited",
            "Silkbank Limited",
            "Soneri Bank Limited",
            "Standard Chartered Bank (Pakistan) Limited",
            "Summit Bank Limited (Formerly Arif Habib Bank Limited)"
        ],
        'Papua New Guinea': [
            "Bank South Pacific",
            "ANZ Bank Papua New Guinea",
            "Westpac Bank Papua New Guinea",
            "Maybank Papua New Guinea",
            "National Development Bank of Papua New Guinea",
            "Nationwide Micro Bank"
        ],
        'Paraguay': [
            "Banco Nacinal de Fomento",
            "Banco Sudameris",
            "Citibank",
            "Banco do Barsil",
            "Banco de la Nacion Argentina",
            "Banco Itau Paraguay",
            "BBVA Paraguay",
            "HSBC Paraguay"
        ],
        'Peru': [
            "Banco Azteca",
            "BCP",
            "BBVA Banco Continental",
            "Scotiabank",
            "Interbank",
            "HSBC",
            "Citibank",
            "Santander",
            "Standard Chartered",
            "Deutsche Bank",
            "Banco Interamericano de Finanzas",
            "Banco Financiero",
            "Banco de Comercio",
            "Mibanco",
            "Banco Falabella",
            "Banco Ripley",
            "Banco del Trabajo",
            "HSBC (merger between Panama’s largest banking group Grupo Banistmo and HSBC Panama)",
            "Citibank (subsidiary of Citigroup which merged with Banco Uno and Banco Cuscatlan)",
            "Banco Bilbao Vizcaya Argentaria.",
            "Banco Atlantico Panama (subsidiary of Banco Santander)",
            "Scotiabank.",
            "Interbank",
            "J.P. MORGAN PRIVATE BANK"
        ],
        'Philippines': [
            "Bank of Commerce",
            "BDO Private Bank, Inc.",
            "Philippine Bank of Communications",
            "Philippine Veterans Bank",
            "Robinsons Bank Corporation",
            "CTBC Bank (Philippines) Corporation",
            "Maybank Philippines, Incorporated",
            "Bangkok Bank Public Co. Ltd.",
            "Bank of America, N.A.",
            "Bank of China Limited – Manila Branch",
            "Citibank, N.A.",
            "JP Morgan Chase Bank, N.A.",
            "KEB Hana Bank – Manila Branch",
            "Mega International Commercial Bank Co., Ltd.",
            "The Bank of Tokyo-Mitsubishi UFJ, Ltd.",
            "First Commercial Bank, Ltd., – Manila Branch",
            "Cathay United Bank Co., Ltd., – Manila Branch",
            "Shinhan Bank – Manila Branch",
            "Sumitomo Mitsui Banking Corporation – Manila Branch",
            "Industrial Bank of Korea – Manila Branch",
            "United Overseas Bank Ltd., – Manila Branch",
            "Hua Nan Commercial Bank, Ltd., – Manila Branch",
            "Bangko Sentral ng Pilipinas (Central bank)",
            "Development Bank of the Philippines",
            "Land Bank of the Philippines",
            "The Overseas Filipino Bank (OFB)",
            "ABN AMRO",
            "Bank of China",
            "Chinatrust Bank",
            "Citibank",
            "DBS Bank",
            "HSBC",
            "Keppel Bank",
            "Maybank",
            "Standard Chartered Bank",
            "United Overseas Bank",
            "Bank of Singapore Ltd.",
            "Barclays Banks PLC",
            "DBS Bank Ltd.",
            "Japan Bank for International Cooperation",
            "Rothschild (Singapore) Ltd.",
            "The Bank of New York Mellon",
            "The Export-Import Bank of Korea (Korea Eximbank)",
            "Union Bank of Switzerland Aktiengesellschaft (AG or corporation limited by share ownership)",
            "Wells Fargo Bank, N.A.",
            "Korea Development Bank"
        ],
        'Poland': [
            "Alior Bank S.A.",
            "BANK POLSKIEJ SPÓŁDZIELCZOŚCI SA",
            "BNP PARIBAS BANK POLSKA SA",
            "BPI Bank Polskich Inwestycji S.A.",
            "BRE Bank Hipoteczny SA",
            "Bank BGŻ BNP Paribas S.A.",
            "Bank BPH",
            "Bank DnB NORD Polska SA",
            "Bank Gospodarstwa Krajowego",
            "Bank Handlowy (Citibank)",
            "Bank Millennium (BC Portugues)",
            "Bank Ochrony Środowiska SA",
            "Bank Pekao (UniCredit)",
            "  Bank Pocztowy SA",
            "Bank Polska Kasa Opieki SA",
            "  Bank Zachodni WBK (Santander)",
            "  Bank of Tokyo-Mitsubishi UFJ (Polska) S.A. ",
            "Credit Agricole Bank Polska S.A.",
            "DZ BANK Polska SA",
            "Deutsche Bank Polska SA",
            "EUROCLEAR Bank SA/NV (Spółka Akcyjna) – Oddział w Polsce ",
            "Euro Bank S.A.",
            "FCA-Group Bank Polska S.A.",
            "Getin Noble Bank S.A.",
            "HSBC Bank Polska SA",
            "ING Bank Śląski S.A.",
            "Idea Bank S.A.",
            "J.P. Morgan Europe Limited Sp. z o.o. Oddział w Polsce ",
            "Mercedes-Benz Bank Polska S.A.",
            "Nest Bank S.A.",
            "PKO Bank Hipoteczny S.A.",
            "PKO Bank Polski",
            "PLUS BANK SA",
            "RBS Bank (Polska) SA",
            "  RCI Banque Spółka Akcyjna Oddział w Polsce ",
            "Raiffeisen Polbank",
            "SGB-Bank S.A.",
            "Santander Consumer Bank S.A.",
            "TF BANK AB",
            "Toyota Bank Polska S.A.",
            "UBS Limited",
            "VOLKSWAGEN BANK POLSKA S.A.",
            "mBank (Commerzbank)",
            "AS Inbank Spółka Akcyjna – Oddział w Polsce",
            "Aareal Bank AG S.A. – Oddział w Polsce",
            "BNP PARIBAS SA Oddział w Polsce",
            "  BNP Paribas Securities Services SKA Oddział w Polsce",
            "Bank of China (Luxembourg) S.A. Spółka Akcyjna Oddział w Polsce",
            "Banque PSA Finance SA Oddział w Polsce",
            "CAIXABANK, S.A. (SPÓŁKA AKCYJNA) ODDZIAŁ W POLSCE",
            "China Construction Bank (Europe) S.A. (Spółka Akcyjna) Oddział w Polsce ",
            "Citibank Europe plc (Publiczna Spółka Akcyjna) Oddział w Polsce",
            "Cofidis S.A. (Spółka Akcyjna) Oddział w Polsce",
            "Danske Bank A/S S.A. Oddział w Polsce",
            "FCE Bank S.A. Oddział w Polsce",
            "HAITONG BANK",
            "Ikano Bank AB (publ) Spółka Akcyjna Oddział w Polsce",
            "Industrial and Commercial Bank of China ",
            "Intesa Sanpaolo S.p.a. Spółka Akcyjna Oddział W Polsce",
            "John Deere Bank S.A. Spółka Akcyjna Oddział w Polsce",
            "  MUFG Bank (Europe) NV S.A. Oddział w Polsce",
            "Nordea Bank AB S.A. Oddział w Polsce",
            "Nykredit Realkredit A/S S.A. – Oddział w Polsce",
            "Skandinaviska Enskilda Banken AB (S.A.) – Oddział w Polsce",
            "Societe Generale SA Oddział w Polsce",
            "Svenska Handelsbanken AB S.A. Oddział w Polsce",
            "VOLKSWAGEN BANK POLSKA S.A."
        ],
        'Portugal': [
            "CAIXA ECONÓMICA MONTEPIO GERAL, CAIXA ECONÓMICA BANCÁRIA, S.A.",
            "BANCO BPI, SA",
            "  BANCO CTT, SA",
            "BANIF – Banco de Investimento",
            "BEST – Banco Electrónico de Serviço Total, SA",
            "BNI – Banco de Negócios Internacional ",
            "Banco ActivoBank, SA",
            "Banco Atlântico Europa, S.A.",
            "Banco BAI Europa, SA",
            "Banco BIC Português, SA",
            "Banco BNP Paribas Personal Finance, SA",
            "Banco Bilbao Vizcaya Argentaria (Portugal), SA",
            "Banco Comercial Portugues",
            "Banco Credibom, SA",
            "Banco Efisa, SA",
            "Banco Finantia, SA",
            "Banco Invest, SA",
            "Banco L.J. Carregosa, SA",
            "  Banco Madesant – Sociedade Unipessoal",
            "  Banco Português de Gestão, SA",
            "Banco Português de Investimento",
            "  Banco de Investimento Global",
            "Banco Rural Europa",
            "Banco Santander Consumer Portugal",
            "Banco Santander Totta",
            "Banco de Investimento Imobiliário",
            "Caixa Geral de Depósitos, SA",
            "Credit Suisse",
            "Haitong Bank",
            "Montepio Investimento, SA",
            "Novo Banco dos Açores, SA",
            "Novo Banco",
            "  Abanca Corporación Bancaria, SA, Sucursal em Portugal",
            "BNP Paribas",
            "  BNP Paribas Securities Services – Sucursal em Portugal",
            "Banco de Caja de España de Inversiones",
            "Banco Primus",
            "Banco do Brasil AG",
            "Bank of China",
            "Bankinter, SA – Sucursal em Portugal",
            "Banque PSA Finance",
            "  Barclays Bank",
            "Caixa – Banco de Investimento",
            "  Citibank ",
            "DEXIA CRÉDIT LOCAL",
            "Deutsche Bank ",
            "Edmond de Rothschild Europe",
            "FCE Bank PLC",
            "IBERCAJA BANCO,",
            "ING BANK NV",
            "  ITAÚ BBA INTERNATIONAL LIMITED",
            "ONEY BANK ",
            "RCI Banque Sucursal Portugal",
            "St. Galler Kantolbank ",
            "TOYOTA Kreditbank GmbH",
            "Volkswagen Bank GmbH",
            "WIZINK BANK SA"
        ],
        'Qatar': [
            "The Commercial Bank of Qatar",
            "Ahli Bank Qatar",
            "International Bank of Qatar",
            "Qatar Development Bank",
            "Qatar Islamic Bank",
            "Qatar National Bank",
            "DOHA BANK",
            "Al Khaliji BANK",
            "QIIB",
            "Barwa Bank",
            "HSBC Bank Middle East"
        ],
        'Romania': [
            "Banca Comerciala Feroviara",
            "Banca Romana de Credite si Investitii (formerly ATEbank Romania)",
            "Banca Transilvania",
            "CEC Bank",
            "Libra Internet Bank",
            "Patria Bank",
            "Alpha Bank",
            "Banca Comercială Română (of the Erste Group)",
            "Banca Românească (of the National Bank of Greece Group)",
            "Bancpost (of the Eurobank Ergasias Group)",
            "Bank Leumi",
            "BRD – Groupe Société Générale",
            "Crédit Agricole (formerly Emporiki Bank)",
            "Credit Europe Bank",
            "Garanti Bank",
            "Idea Bank (formerly Romanian International Bank)",
            "Intesa Sanpaolo",
            "Marfin Bank (formerly Egnatia Bank)",
            "OTP Bank",
            "Piraeus Bank",
            "Porsche Bank",
            "ProCredit Bank",
            "Raiffeisen Bank",
            "UniCredit Bank"
        ],
        'Russia': [
            "Sberbank",
            "VTB",
            "Russian Agricultural Bank",
            "Bank of Moscow",
            "VTB24",
            "Gazprombank",
            "Alfa Bank",
            "UniCredit Bank (Russia)",
            "Rosbank",
            "Raiffeisen Bank (Russia)",
            "Promsvyazbank",
            "TransCreditBank",
            "Uralsib",
            "Nomos Bank",
            "MDM Bank",
            "Bank Saint Petersburg",
            "AK BARS Bank",
            "Bank Rossiya",
            "Nordea Bank (Russia)",
            "Citibank (Russia)",
            "Credit Bank of Moscow",
            "Vozrozhdenie Bank",
            "Sviaz-Bank",
            "ING Bank (Eurasia)",
            "Bank ZENIT",
            "Bank of Khanty-Mansiysk",
            "Globex Bank",
            "Bank Petrocommerc",
            "National Bank TRUST",
            "Russian Standard Bank",
            "VTB Bank",
            "Gazprombank",
            "Rosselkhozbank",
            "Goldman Sachs",
            "Morgan Stanley",
            "Bank of America Merrill Lynch",
            "JPMorgan",
            "Barclay’s",
            "Deutsche Bank",
            "UBS",
            "Raiffeisen Bank ",
            "Unicredit Bank",
            "Citibank ",
            "HBSC",
            "Alfa-Bank",
            "Russian Standard",
            " Moscow Credit Bank",
            "Bank St. Petersburg",
            "Binbank"
        ],
        'Rwanda': [
            "Access Bank Rwanda",
            "Bank of Kigali",
            "Banque Populaire du Rwanda SA",
            "Commercial Bank of Rwanda",
            "Compagnie Générale de Banque",
            "Diamond Trust Bank Group",
            "Ecobank Rwanda",
            "Guaranty Trust Bank (Rwanda)",
            "Housing Bank of Rwanda",
            "KCB Rwanda",
            "United Bank for Africa",
            "Urwego Opportunity Bank"
        ],
        'San Marino': [
            "Asset Banca ASTTSMS1 (not connected)",
            "Banca Agricola Commerciale Istituto Bancario Sammarinese",
            "Banca Commerciale Sammarinese COERSMS1 (not connected)",
            "Banca del Titano / San Marino International Bank / Banca Impresa (no website) BTITSMS1 (not connected)",
            "Banca di San Marino MAOISMS1",
            "Banca Partner PANNSMS1 (not connected)",
            "Banca Sammarinese di Investimento BSDISMSD",
            "Cassa di Risparmio della Repubblica di San Marino CSSMSMSM",
            "Euro Commercial Bank EUCDSMSM"
        ],
        'Samoa': [
            "ANZ Bank",
            "National Bank of Samoa "
        ],
        'Saudi Arabia': [
            "The National Commercial Bank",
            "The Saudi British Bank",
            "Saudi Investment Bank",
            "Alinma Bank",
            "Banque Saudi Fransi",
            "Riyad Bank",
            "Samba Financial Group (Samba)",
            "Saudi Hollandi Bank (Alawwal)",
            "Al Rajhi Bank",
            "Arab National Bank",
            "Bank Al-Bilad",
            "Bank AlJazira",
            "Asia Bank",
            "Qatar National Bank (QNB)",
            "State Bank of India (SBI)",
            "Gulf International Bank (GIB)",
            "Emirates NBD",
            "National Bank of Bahrain (NBB)",
            "National Bank of Kuwait (NBK)",
            "Muscat Bank",
            "Deutsche Bank",
            "BNP Paribas",
            "J.P. Morgan Chase N.A",
            "National Bank of Pakistan (NBP)",
            "T.C.ZIRAAT BANKASI A.S.",
            "Industrial and Commercial Bank of China (ICBC)"
        ],
        'Senegal': [
            "Attijariwafa Bank",
            "Bank of Africa Sénégal",
            "International Commercial Bank",
            "Banque Atlantique Sénégal",
            "Banque Régionale de Solidarité",
            "Banque de l’Habitat du Sénégal",
            "Société Générale de Banques au Sénégal (SG-BS)",
            "Ecobank Sénégal",
            "Banque Sénégalo-Tunisienne",
            "Crédit Lyonnais Sénégal",
            "Caisse Nationale de Crédit Agricole du Sénégal (CNCAS)",
            "Citibank Sénégal",
            "Compagnie Bancaire de l’Afrique Occidentale",
            "Banque Islamique du Sénégal",
            "Banque des Institutions Mutualistes d’Afrique de l’Ouest",
            "Banque Sahélo-Saharienne pour l’Investissement et le Commerce (BSSIC)",
            "Banque Internationale pour le Commerce et l’Industrie du Sénégal (BICIS)",
            "United Bank for Africa",
            "Banque Régionale des Marchés",
            "Banque de Dakar (BDK)"
        ],
        'Serbia': [
            "Addiko Bank",
            "AIK Banka",
            "Banca Intesa",
            "Bank of China Srbija",
            "Crédit Agricole",
            "Direktna Banka",
            "Expobank",
            "Erste Bank",
            "Eurobank",
            "Halkbank",
            "JUBMES banka",
            "Komercijalna banka",
            "Mirabank",
            "mts banka",
            "NLB banka",
            "Opportunity banka",
            "OTP banka",
            "Piraeus Bank",
            "Poštanska štedionica",
            "ProCredit Bank",
            "Raiffeisen Banka",
            "Sberbank Srbija",
            "Société Générale",
            "Srpska banka",
            "Telenor banka",
            "UniCredit Bank Serbia",
            "Vojvođanska banka",
            "VTB Banka",
            "Atlas Banka",
            "Citibank",
            "Commerzbank",
            "Deutsche Bank",
            "Eximbank"
        ],
        'Seychelles': [
            "Bank AL Habib",
            "Bank of Baroda",
            "Bank of Ceylon",
            "Barclays Bank",
            "HBL Pakistan",
            "MCB Group"
        ],
        'Sierra Leone': [
            "Access Bank plc",
            "Ecobank",
            "First International Bank",
            "Guaranty Trust Bank",
            "International Commercial Bank",
            "Rokel Commercial Bank",
            "Sierra Leone Commercial Bank",
            "Skye Bank",
            "Standard Chartered Bank",
            "Union Trust Bank",
            "United Bank for Africa",
            "Zenith Bank"
        ],
        'Singapore': [
            "DBS Bank",
            "Oversea-Chinese Banking Corporation (OCBC)",
            "United Overseas Bank (UOB)",
            "ABN-AMRO Singapore",
            "AFC Merchant Bank",
            "ANZ Singapore",
            "Arab Bank Singapore Branch",
            "Citibank Singapore",
            "Deutsche Bank AG Singapore Branch",
            "Development Bank of Singapore (DBS)",
            "Keppel TatLee Bank",
            "Oversea-Chinese Banking Corporation Limited (OCBC)",
            "Overseas Union Bank",
            "Standard Chartered Bank",
            "United Overseas Bank",
            "American Express Bank Limited (Now under Standard Chartered Bank)",
            "Bangkok Bank",
            "Bank of America",
            "Bank of China",
            "Bank of East Asia ",
            "Bank of India",
            "Bank of Tokyo-Mitsubishi UFJ ",
            "Calyon",
            "Citibank",
            "Hongkong and Shanghai Banking Corporation",
            "Hong Leong Bank Berhad",
            "Indian Bank",
            "Indian Overseas Bank",
            "JPMorgan Chase Bank",
            "PT Bank Mandiri (Persero) Tbk.",
            "PT Bank Negara Indonesia (Persero) Tbk.",
            "RHB Bank Berhad",
            "Southern Bank Berhad **Now CIMB Bank",
            "Sumitomo Mitsui Banking Corporation",
            "UCO Bank"
        ],
        'Slovakia': [
            "Československá obchodná banka, owned by KBC Bank ",
            "ČSOB Stavebná sporiteľňa ",
            "OTP Banka Slovensko, member of OTP Bank ",
            "Poštová banka ",
            "Prima banka, member of Penta Investments ",
            "Privatbanka ",
            "Prvá stavebná sporiteľňa ",
            "Raiffeisen Bank ",
            "Slovenská sporiteľňa, member of Erste Bank ",
            "Slovenská záručná a rozvojová banka ",
            "Tatra banka, member of Raiffeisen Zentralbank ",
            "Všeobecná úverová banka, member of Intesa Sanpaolo ",
            "Wüstenrot stavebná sporiteľňa",
            "Banco Cofidis, S.A. ",
            "BKS Bank AG ",
            "BNP Paribas Personal Finance SA, member of BNP Paribas",
            "Citibank Europe plc, member of Citigroup ",
            "Commerzbank AG ",
            "Fio Banka ",
            "ING Bank N.V., member of ING Group ",
            "J&T Banka, member of J&T Group ",
            "KDB Bank Europe Ltd., owned by Korea Development Bank ",
            "Komerční banka Bratislava, owned by Komerční Banka (member of Société Générale) ",
            "mBank, owned by BRE Bank SA, member of Commerzbank AG ",
            "Oberbank AG ",
            "UniCredit Bank Czech Republic and Slovakia",
            "Banque Privee Edmond De Rothschild Europe",
            "European Bank for Reconstruction and Development",
            "Prvá česko-ruská banka"
        ],
        'Slovenia': [
            "Hranilnica LON d.d.",
            "Delavska hranilnica d.d.",
            "Hranilnica in posojilnica Vipava d.d",
            "Nova Ljubljanska banka d.d., Ljubljana",
            "SKB banka d.d.",
            "Nova Kreditna banka Maribor, d.d.",
            "Abanka d.d.",
            "Banka Celje d.d.",
            "Gorenjska banka d.d., Kranj",
            "Banka Intesa Sanpaolo d.d., Koper",
            "Deželna banka Slovenije d.d",
            "Probanka d.d",
            "Factor banka d.d",
            "UniCredit banka Slovenija d.d. –",
            "Sberbank banka d.d.",
            "Addiko Bank",
            "Banka Sparkasse d.d",
            "SID – Slovenska izvozna in razvojna banka d.d.,",
            "Poštna banka Slovenije d.d."
        ],
        'Solomon Islands': [
            "List of Banks",
            "Bank of South Pacific.",
            "ANZ Solomon Islands.",
            "National Bank of Solomon Islands.",
            "Westpac Solomon Islands.",
            "Bank of the South Pacific.",
            "Development Bank of Solomon Islands (defunct)"
        ],
        'South Africa': [
            "African Bank Limited",
            "Bidvest Bank",
            "Capitec Bank",
            "FirstRand Bank",
            "Grindrod Bank",
            "Imperial Bank South Africa",
            "Investec",
            "Nedbank",
            "Sasfin Bank",
            "Standard Bank",
            "Teba Bank Limited",
            "Absa Group",
            "Habib Bank AG Zurich",
            "HBL Pakistan",
            "Bank of Baroda",
            "Bank of China",
            "Bank of Taiwan",
            "Calyon",
            "China Construction Bank Corporation",
            "Citibank",
            "Deutsche Bank",
            "Hongkong and Shanghai Banking Corporation",
            "JPMorgan Chase Bank",
            "Royal Bank of Scotland",
            "Société Générale",
            "South African Bank of Athens (99.79% subsidiary of National Bank of Greece)",
            "Standard Chartered Bank",
            "State Bank of India",
            "Investec",
            "RMB Private Bank",
            "Nedbank Private Wealth",
            "Absa",
            "Standard Bank"
        ],
        'Spain': [
            "Major banks",
            "Banca March",
            "Banca Pueyo",
            "BBVA",
            "Banco Caixa Geral",
            "Bancofar",
            "Banco Pastor",
            "Banco Popular Español",
            "Banco Sabadell",
            "Banco Santander",
            "Bankia",
            "Bankinter",
            "Bankoa",
            "CaixaBank",
            "Deutsche Bank",
            "EVO Banco",
            "ING Direct",
            "Novo Banco",
            "Popular Banca Privada",
            "Renta 4 Banco",
            "Targobank",
            "Triodos Bank",
            "Cajas (savings banks)",
            "Bilbao Bizkaia Kutxa (BBK)",
            "CAM",
            "Caixa de Balears, “Sa Nostra”",
            "Caixa de Catalunya",
            "Caixa de Manresa",
            "Caixa Rural Galega",
            "Caixa de Terrassa",
            "Caixa d’Estalvis i Pensions de Barcelona, “la Caixa”",
            "Caixa Galicia",
            "Caixa Penedès",
            "Caixa Tarragona",
            "Caja Cantabria",
            "Caja Circulo",
            "Caja de Arquitectos",
            "Caja de Burgos",
            "Caja de Ingenieros",
            "Caja Duero",
            "Caja España",
            "Caja Madrid",
            "Caja Murcia",
            "Caixa Ontinyent",
            "Caja Navarra",
            "Caja Vital",
            "Cajastur",
            "Cajasur",
            "Kutxa",
            "Unicaja"
        ],
        'Sri Lanka': [
            "Amana Bank",
            "Axis Bank Ltd",
            "Bank of Ceylon",
            "Cargills Bank Ltd",
            "Citibank N.A.",
            "Commercial Bank of Ceylon PLC",
            "Deutsche Bank AG",
            "DFCC Bank PLC",
            "Habib Bank Ltd",
            "Hatton National Bank PLC",
            "ICICI Bank Ltd",
            "Indian Bank",
            "Indian Overseas Bank",
            "MCB Bank Ltd",
            "National Development Bank PLC",
            "Nations Trust Bank PLC",
            "Pan Asia Banking Corporation PLC",
            "People’s Bank",
            "Public Bank Berhad",
            "Sampath Bank PLC",
            "Seylan Bank PLC",
            "Standard Chartered Bank",
            "State Bank of India",
            "The Hong Kong and Shanghai Banking Corporation Ltd (HSBC)",
            "Union Bank of Colombo PLC"
        ],
        'Sudan': [
            "Agricultural Bank of Sudan",
            "Al Shamal Islamic Bank",
            "Bank of Khartoum",
            "Family Bank",
            "Industrial Development Bank",
            "National Bank of Sudan",
            "Qatar National Bank",
            "Buffalo Commercial Bank",
            "Commercial Bank of Ethiopia",
            "Equity Bank (South Sudan)",
            "International Commercial Bank",
            "Ivory Bank",
            "Kenya Commercial Bank (South Sudan)",
            "Nile Commercial Bank"
        ],
        'Suriname': [
            "De Surinaamsche Bank",
            "Hakrinbank",
            "Surinaamse Volkscredietbank",
            "Surinaamse Postspaarbank",
            "Landbouwbank",
            "Surichangebank",
            "Finabank",
            "Cooperatieve spaar- en kredietbank Godo",
            "RBC Suriname; former subsidiary of the Royal Bank of Trinidad and Tobago",
            "Southern Commercial Bank Suriname"
        ],
        'Swaziland': [
            "First National Bank (South Africa)",
            "Nedbank",
            "Standard Bank",
            "Swazi Bank"
        ],
        'Switzerland': [
            "Top-tier Swiss banks",
            "UBS AG",
            "Credit Suisse",
            "Julius Baer Group",
            "The Pictet Group",
            "Lombard Odier and Co",
            "Alternative Bank Schweiz ABS",
            "Banque Bonhôte & Cie SA",
            "Cantonal banks",
            "CIM Bank",
            "Bank Cler (former Bank Coop)",
            "Hinduja Bank (Switzerland) Ltd",
            "J. Safra Sarasin",
            "Lombard Odier",
            "Migros Bank",
            "Mirabaud Group",
            "Morval",
            "SIX SIS AG",
            "Vontobel",
            "WIR Bank",
            "Zurich Cantonal Bank",
            "Family-owned Swiss banks",
            "Habib Bank AG Zurich",
            "Banque privée Edmond de Rothschild",
            "Bordier & Cie",
            "Gonet & Cie",
            "E. Gutzwiller & Cie, Banquiers",
            "Landolt & Cie",
            "Lienhardt & Partner Privatbank Zürich",
            "Reichmuth & Co",
            "REYL Group",
            "Union Bancaire Privée",
            "Rahn+Bodmer Co.",
            "AXA Bank Europe, Brüssel, Zweigniederlassung Winterthur",
            "Fortis Banque, SA/NV, Bruxelles, Succursale de Zurich",
            "ING Belgique, Bruxelles, Succursale de Genève, Geneva",
            "STRATEO, Genève, Succursale de Keytrade Bank SA, Bruxelles, Geneva",
            "Itaú Private Bank, Zürich",
            "Jyske Bank (Schweiz) AG",
            "Nordea Bank S.A., Luxemburg, Zweigniederlassung Zürich",
            "Banque du Léman SA, Geneva",
            "BNP Paribas (Suisse) SA, Geneva",
            "Crédit Agricole (Suisse) SA, Geneva",
            "Société Générale Private Banking (Suisse) SA, Geneva",
            "Deutsche Bank (Suisse) SA, Geneva",
            "Kaupthing Bank Luxembourg S.A",
            "Bank Hapoalim (Switzerland) Ltd",
            "Bank Leumi (Schweiz) AG, Geneva",
            "IDB (Swiss) Bank Ltd, Geneva",
            "United Mizrahi Bank (Schweiz) AG",
            "Banque Profil de Gestion SA, Geneva",
            "Intesa Sanpaolo",
            "Sella Bank AG",
            "UniCredit (Suisse) Bank SA",
            "Banca Popolare di Sondrio (Suisse)",
            "Mitsubishi UFJ Wealth Management Bank (Switzerland), Ltd.",
            "Nomura Bank (Schweiz) AG",
            "BankMed (Suisse) SA, Geneva",
            "Banque Audi (Suisse) SA, Geneva",
            "BlomBank (Suisse) SA, Geneva",
            "LGT Bank (Schweiz) AG, Basel",
            "KBL (Switzerland) Ltd, Geneva",
            "Skandinaviska Enskilda Banken SA, Luxembourg,",
            "Arab Bank (Switzerland) Ltd, Geneva",
            "NBAD Private Bank (Suisse) SA, Geneva",
            "NBK Banque Privée (Suisse) SA, Geneva",
            "QNB Banque Privée (Suisse) SA, Geneva",
            "ABN AMRO Bank N.V., Amsterdam, Zweigniederlassung Zürich",
            "Credit Europe Bank (SA), Geneva",
            "Banque Privée BCP (Suisse) SA, ",
            "Investec Bank",
            "Banco Santander (Suisse) SA, Geneva",
            "NCG Banco S.A., succursale de Genève, Geneva",
            "Barclays Bank (Suisse) SA, Geneva",
            "Barclays Capital, Zurich Branch of Barclays Bank PLC, London",
            "HSBC Private Bank (Suisse) SA, Geneva",
            "IG Bank S.A., Geneva",
            "Lloyds Bank plc, Londres, succursale de Genève, Geneva",
            "RBS Coutts Bank AG",
            "Citibank, NA, Las Vegas, Succursale de Genève",
            "Citibank, NA, Las Vegas, Zurich Branch",
            "Goldman Sachs Bank AG",
            "JPMorgan Chase Bank, National Association, Columbus, Succursale de Zurich",
            "J.P. Morgan (Suisse) SA, Geneva",
            "Merrill Lynch Capital Markets AG",
            "Morgan Stanley AG",
            "State Street Bank GmbH, München, Zweigniederlassung Zürich"
        ],

        'Taiwan': [
            "Bank of Taiwan",
            "Land Bank of Taiwan",
            "Taiwan Cooperative Bank",
            "Chang Hwa Bank",
            "Citibank Taiwan",
            "Shanghai Commercial and Savings Bank",
            "Taipei Fubon Bank",
            "Cathay United Bank",
            "Bank of Kaohsiung",
            "Mega International Commercial Bank ",
            "Standard Chartered Bank (Taiwan) ",
            "Taichung Bank",
            "King's Town Bank ",
            "HSBC Bank (Taiwan) ",
            "COTA Commercial Bank",
            "Union Bank of Taiwan",
            "Bank SinoPac",
            "E.SUN Commercial Bank",
            "KGI Bank",
            "DBS Bank (Taiwan)",
            "Taishin International Bank",
            "CTBC Bank - China Trust"
        ],
        'Tajikistan': [
            "AccessBank Tajikistan",
            "Agroinvestbank",
            "Bank Eskhata",
            "First MicroFinance Bank-Tajikistan",
            "Kont Bank",
            "Orienbank",
            "Spitamen Bank",
            "Vnesheconombank",
            "Agroinvestbank ",
            "Orionbank ",
            "Tajikbankbusiness ",
            "Tajbank",
            "Tajprombank ",
            "Aviabank ",
            "East Credit Bank",
            "Central Asian Bank"
        ],
        'Tanzania': [
            "AccessBank Tanzania",
            "Letshego Bank Tanzania",
            "Akiba Commercial Bank",
            "Amana Bank",
            "Azania Bank",
            "BancABC",
            "Bank M",
            "Bank of Africa Tanzania",
            "Bank of Baroda Tanzania Limited",
            "Bank of India (Tanzania)",
            "Barclays Bank of Tanzania",
            "Citibank",
            "Commercial Bank of Africa (Tanzania)",
            "CRDB Bank",
            "DCB Commercial Bank",
            "Diamond Trust Bank Tanzania",
            "Ecobank",
            "Equity Bank (Tanzania)",
            "Exim Bank (Tanzania)",
            "FINCA Microfinance Bank(Tanzania)",
            "First National Bank of Tanzania",
            "FBME Bank",
            "Guaranty Trust Bank (Tanzania) Limited",
            "Habib African Bank",
            "I&M Bank (Tanzania)",
            "International Commercial Bank",
            "Kenya Commercial Bank",
            "Mkombozi Commercial Bank",
            "National Bank of Commerce (Tanzania)",
            "National Microfinance Bank",
            "NIC Bank Tanzania",
            "People’s Bank of Zanzibar",
            "Stanbic Bank Tanzania Limited",
            "Standard Chartered Bank",
            "United Bank for Africa",
            "UBL Bank Tanzania Limited",
            "Mwalimu Commercial Bank",
            "Twiga Bancorp Limited (In receivership)",
            "TIB cORporate Bank",
            "First Housing Company Tanzania Limited",
            "Community banks",
            "Covenant Bank for Women Tanzania Limited",
            "Efatha Bank Limited",
            "Kagera Farmers’ Cooperative Bank",
            "Kilimanjaro Cooperative Bank",
            "Maendeleo Bank Plc",
            "Meru Community Bank Limited",
            "Mufindi Comunity Bank Plc",
            "Mwanga Rural Community Bank Limited",
            "Njombe Community Bank Limited",
            "Tandahimba Community Bank Limited",
            "Uchumi Commercial Bank Limited",
            "Microfinance banks",
            "EFC Tanzania Microfinance Bank",
            "Finca Microfinance Bank",
            "Hakika Microfinance Bank",
            "Tanzania Microfinance Bank",
            "Yetu Microfinance"
        ],
        'Thailand': [
            "Bangkok Bank",
            "Krungthai Bank",
            "Siam Commercial Bank",
            "KASIKORNBANK",
            "Bank of Ayudhya ",
            "Thanachart Bank",
            "TMB Bank ",
            "Kiatnakin Bank",
            "CIMB Thai",
            "Standard Chartered Bank (Thai)",
            "United Overseas Bank (Thai)",
            "Tisco Bank",
            "ICBC Bank",
            "Mega ICB",
            "Government Savings Bank",
            "Government Housing Bank",
            "Bank for Agriculture and Agricultural Co-operatives (BAAC)",
            "Export–Import Bank of Thailand",
            "Islamic Bank of Thailand",
            "SME Development Bank of Thailand",
            "ABN AMRO Bank N.V.",
            "BNP Paribas",
            "Deutsche Bank",
            "HSBC",
            "Bank of China Ltd.",
            "The Bank of Tokyo-Mitsubishi UFJ, Ltd.",
            "Indian Overseas Bank",
            "Mizuho Corporate Bank, Ltd.",
            "Oversea-Chinese Banking Corporation",
            "RHB Bank Berhad",
            "Sumitomo Mitsui Banking Corporation",
            "Bank of America Merrill Lynch",
            "Citibank Thailand",
            "JP Morgan Chase",
            "Scotiabank "
        ],
        'Togo': [
            "Banque Atlantique",
            "Banque Sahélo-Saharienne pour l’Investissement et le Commerce",
            "Ecobank",
            "Union Togolaise de Banque",
            "Banque Togolaise pour le Commerce et l’Industrie",
            "Banque Régionale de Solidarité",
            "Banque Internationale pour l’Afrique au Togo",
            "Financial Bank Togo",
            "Société Inter-Africaine de Banque"
        ],
        'Tonga': [
            "ANZ Bank Tonga",
            "Bank of South Pacific Tonga",
            "MBF Bank Tonga",
            "Tonga Development Bank"
        ],
        'Trinidad': [
            "Other Banks",
            "Bank of Baroda Trinidad and Tobago Limited",
            "Citicorp Merchant Bank Ltd",
            "First Citizens Bank",
            "Intercommercial Bank Limited",
            "Royal Bank of Trinidad and Tobago (RBTT)",
            "Republic Bank",
            "Scotiabank Trinidad and Tobago Limited"
        ],
        'Tunisia': [
            "Banque Al-Baraka (http://www.albarakabank.com.tn)",
            "Arab Tunisian Bank (ATB)",
            "Banque Franco Tunisienne (BFT)",
            "Banque Nationale Agricole (BNA)",
            "Attijari Bank",
            "Banque de Tunisie (BT)",
            "Amen Bank (AB)",
            "Banque Internationale Arabe de Tunisie (BIAT)",
            "Société Tunisienne de Banque (STB)",
            "Union de Bancaire pour le Commerce et l’Industrie (UBCI)",
            "Union Internationale de Banques (UIB)",
            "Banque de l’Habitat (BH)",
            "Citibank",
            "Banque Tunisienne de Solidarite (BTS)",
            "Arab Banking Corporation (ABC) and its subsidiary: ABC Tunisie",
            "Tunisian Qatari Bank (TQB)",
            "Banque de Tunisie et des Emirats (BTE)",
            "Banque Tuniso-Koweitienne (BTK)",
            "Banque de Financement des Petites et Moyennes Enterprises (BFPME)",
            "Banque Tuniso-Libyenne (BTL)",
            "Stusid Bank (STUSID)",
            "Banque Zitouna (ZITOUNA)"
        ],
        'Turkey': [
            "Türkiye Cumhuriyeti Ziraat Bankası A.Ş. ",
            "Türkiye Halk Bankası A.Ş. ",
            "Türkiye Vakıflar Bankası T.A.O.",
            "BankPozitif Kredi ve Kalkınma Bankası A.Ş ",
            "Credit Agricole Yatırım Bankası Türk A.Ş. ",
            "Merrill Lynch Yatırım Bank A.Ş. ",
            "Taib Yatırım Bank A.Ş.",
            "Albaraka Türk Katılım Bankası A.Ş. (Albaraka Türk Participation Bank Inc.) ",
            "Kuveyt Türk Katılım Bankası A.Ş.",
            "Arap Türk Bankası A.Ş. ",
            "Burgan Bank A.Ş. ",
            "Citibank A.Ş. ",
            "Denizbank A.Ş. ",
            "Deutsche Bank A.Ş. ",
            "QNB Finansbank A.Ş. (owned by Qatar National Bank) ",
            "HSBC Bank A.Ş. ",
            "ING Bank A.Ş. ",
            "Odea Bank A.Ş. ",
            "Turkland Bank A.Ş. ",
            "Bank Mellat ",
            "Habib Bank Limited ",
            "JPMorganChase N.A. ",
            "Portigon AG ",
            "Royal Bank of Scotland N.V. ",
            "Société Générale (SA)",
            "Albaraka Türk Katılım Bankası A.Ş. (Albaraka Türk Participation Bank Inc.) ",
            "Kuveyt Türk Katılım Bankası A.Ş",
            "Akbank T.A.Ş. ",
            "Alternatif Bank A.Ş. ",
            "Anadolubank A.Ş. ",
            "Fibabanka A.Ş. ",
            "Şekerbank T.A.Ş. ",
            "Tekstilbank A.Ş. ",
            "Türk Ekonomi Bankası A.Ş. ",
            "Turkish Bank A.Ş. ",
            "Türkiye Garanti Bankası A.Ş. ",
            "Türkiye İş Bankası A.Ş. ",
            "Yapı ve Kredi Bankası A.Ş.",
            "Ziraat Katılım Bankası A.Ş. ",
            "Vakıf Katılım Bankası A.Ş.",
            "Aktif Yatırım Bankası A.Ş. ",
            "Diler Yatırım Bankası A.Ş. ",
            "GSD Yatırım Bankası A.Ş. ",
            "IMKB Takas ve Saklama Bankası A.Ş. ",
            "Nurol Yatırım Bankası A.Ş. ",
            "Türkiye Sınai Kalkınma Bankası A.Ş"
        ],
        'United States': [
            "Chase Bank",
            "Bank of America",
            "Wells Fargo",
            "U.S. Bank",
            "BBVA Compass",
            "Capital One Bank",
            "Bank of the west",
            "Santander Consumer Bank",
            "Citi Bank",
            "Huntington Bank",
            "M&T Bank",
            "Woodforest National Bank",
            "Citizens Bank",
            "Fifth Third Bank",
            "Key Bank",
            "TD Bank",
            "Sun Trust Bank",
            "Regions Bank",
            "PNC Bank",
            "BB&T Bank",
            "First National Bank",
            "BMO Harris Bank",
            "First Citizens Bank",
            "Comerica Bank",
            "People's United Bank",
            "Umpqua Bank",
            "Bank of the Ozarks",
            "HSBC",
            "MUFG Union Bank",
            "Arvest Bank",
            "Chemical Bank",
            "TCF Bank",
            "Synovus Bank",
            "Bancorp South Bank",
            "Washington Federal",
            "Assiciated Bank",
            "Iberiabank",
            "Valley National Bank",
            "Whitney Bank",
            "Trust Mark National Bank",
            "Great Western Bank",
            "Columbia State Bank",
            "Centennial Bank",
            "Old National Bank",
            "South State Bank",
            "First Tennessee Bank",
            "NBT Bank",
            "Renasant Bank",
            "Banner Bank",
            "Webster Bank",
            "Simmons Bank",
            "United Bank",
            "Frost Bank",
            "WesBanco Bank",
            "Commerce Bank",
            "Investors Bank",
            "TrustCo Bank",
            "First Commonwealth Bank",
            "Sterling National Bank",
            "Carter Bank And Trust",
            "First Midwest Bank",
            "First Bank",
            "Park National Bank",
            "Pinnacle Bank",
            "Glacier Bank",
            "Fulton Bank",
            "Rabobank",
            "Zions Bank",
            "First Merchants Bank",
            "East West Bank",
            "First Interstate Bank",
            "Union Bank and Trust",
            "Great Southern Bank",
            "Flagster Bank"
        ],
        'Uganda': [
            "ABC Bank (Uganda)",
            "Bank of Africa (Uganda)",
            "Bank of Baroda (Uganda)",
            "Barclays Bank of Uganda",
            "Cairo International Bank",
            "Centenary Bank",
            "Citibank Uganda",
            "Crane Bank",
            "DFCU Bank",
            "Diamond Trust Bank (Uganda) Limited",
            "Ecobank (Uganda)",
            "Equity Bank Uganda Limited",
            "Exim Bank (Uganda)",
            "Fina Bank (Uganda)",
            "Housing Finance Bank",
            "KCB Bank Uganda Limited",
            "Orient Bank",
            "Stanbic Bank Uganda Limited",
            "Standard Chartered Uganda",
            "Tropical Bank",
            "United Bank for Africa (Uganda)",
            "Standard Chartered",
            "Barclays"
        ],
        'Ukraine': [
            "PrivatBank",
            "Oschadbank",
            "Ukreximbank",
            "Raiffeisen Bank Aval",
            "Ukrgasbank",
            "Alfa Bank Ukraine",
            "UkrSibbank",
            "First Ukrainian International Bank",
            "Sberbank",
            "Crédit Agricole",
            "OTP Bank",
            "Ukrsotsbank",
            "Pivdennyi Bank",
            "Prominvestbank",
            "Citibank",
            "Other commercial banks",
            "A-Bank",
            "Arkada Bank",
            "Bank Lviv",
            "BTA Bank",
            "Credit Dnipro Bank",
            "Credit Europe Bank",
            "Creditwest Bank",
            "Deutsche Bank",
            "First Investment Bank",
            "Idea Bank (99.5% ownership in Getin Holding S.A.)",
            "ING Bank Ukraine",
            "KredoBank (99.6% ownership in PKO Bank Polski)",
            "Marfin Bank",
            "Megabank",
            "Piraeus Bank",
            "Pravex Bank (subsidiary of Intesa Sanpaolo)",
            "ProCredit Bank",
            "SEB",
            "Tascombank",
            "Universal Bank",
            "VS Bank",
            "VTB Bank"
        ],
        'United Arab Emirates': [
            "National Bank of Abu Dhabi",
            "Abu Dhabi Commercial Bank",
            "Arab Bank",
            "Union National Bank",
            "Commercial Bank of Dubai",
            "Dubai Islamic Bank",
            "Emirates NBD Bank",
            "Emirates Islamic Bank",
            "Mashreq Bank",
            "Sharjah Islamic Bank",
            "Bank of Sharjah",
            "United Arab Bank",
            "InvestBank",
            "The National Bank of R.A.K",
            "Commercial Bank Internationa",
            "National Bank of Fujairah",
            "National Bank of U.A.Q",
            "First Gulf Bank",
            "Abu Dhabi Islamic Bank",
            "Dubai Bank",
            "Noor Islamic Bank",
            "Al Hilal Bank",
            "Ajman Bank",
            "ABN Amro Bank NV",
            "Abu Dhabi Commercial Bank",
            "Abu Dhabi Islamic Bank",
            "Al Ahli Bank of Kuwait",
            "Al Rafidain Bank",
            "Al Hilal Bank",
            "Arab African International Bank",
            "Arab Bank For Investment And Foreign Trade",
            "Arab Bank PLC",
            "Bank Melli Iran",
            "Bank of Baroda",
            "Bank of Sharjah",
            "Bank Saderat Iran",
            "Blom Bank France SA",
            "Banque Du Caire",
            "Calyon Bank",
            "Al Khaliji France",
            "BNP Paribas Bank",
            "HSBC Bank Middle East",
            "CitiBank NA",
            "Commercial Bank International",
            "Commercial Bank of Dubai",
            "Dubai Islamic Bank",
            "Dubai Bank PJSC",
            "El Nilein Bank",
            "Emirates NBD",
            "Emirates Islamic Bank",
            "First Gulf Bank",
            "Habib Bank Limited",
            "Habib Bank AG Zurich",
            "Invest Bank",
            "Janata Bank",
            "Lloyds Bank TSB",
            "Mashreq Bank",
            "National Bank of Abu Dhabi",
            "National Bank of Bahrain",
            "National Bank of Fujairah",
            "National Bank of Oman",
            "National Bank of RAK",
            "National Bank of UAQ",
            "Noor Islamic Bank PJSC",
            "Sharjah Islamic Bank",
            "Standard Chartered Bank",
            "Union National Bank",
            "United Arab Bank",
            "United Bank Limited",
            "National Bank of Bahrain",
            "Rafidain Bank",
            "Arab Bank PLC",
            "Banque Misr",
            "El Nilein Bank",
            "National Bank of Oman S.A.O.G",
            "Credit Agricole – Corporate and Investment Bank",
            "Bank of Baroda",
            "BNP Paribas",
            "Janata Bank Limited",
            "HSBC Bank Middle East Limited",
            "Arab African International Bank",
            "Al Khaliji (France) S. A.",
            "Al Ahli Bank of Kuwait",
            "Barclays Bank PLC",
            "Habib Bank Ltd.",
            "Habib Bank A.G Zurich",
            "Standard Chartered Bank",
            "CitiBank N.A",
            "Bank Saderat Iran",
            "Bank Meli Iran",
            "Blom Bank France",
            "Lloyds TSB Bank PLC",
            "The Royal Bank of Scotland plc",
            "United Bank Ltd",
            "Doha Bank",
            "Samba Financial Group",
            "National Bank of Kuwait",
            "Emirates NBD;",
            "National Bank of Abu Dhabi;",
            "Abu Dhabi Commercial Bank;",
            "First Gulf Bank;",
            "Dubai Islamic Bank."
        ],
        'United Kingdom': [
            "Bank of Scotland",
            "Barclays Bank",
            "Clydesdale Bank",
            "The Co-operative Bank",
            "Northern Bank",
            " Danske Bank",
            "Halifax",
            "HSBC UK",
            "Lloyds Bank",
            "National Westminster Bank,",
            "The Royal Bank of Scotland",
            "Santander UK",
            "Standard Chartered Bank ",
            "TSB Bank",
            "Ulster Bank",
            "Yorkshire Bank",
            "Adam and Company, part of The Royal Bank of Scotland Group",
            "Aldermore Bank",
            "Allied Irish Bank, part of Allied Irish Banks",
            "Al Rayan Bank, part of Masraf Al Rayan",
            "Arbuthnot Latham & Co",
            "Atom Bank",
            "Bank Negara Indonesia",
            "Bank and Clients",
            "Bank of Ceylon (UK), part of Bank of Ceylon",
            "Bank of Cyprus (UK), part of Bank of Cyprus",
            "Bank of Ireland (UK), part of Bank of Ireland",
            "Butterfield Private Bank",
            "C. Hoare & Co",
            "Cambridge & Counties Bank",
            "Cater Allen Private Bank, subsidiary of Santander UK, part of Banco Santander",
            "Child & Co, branch of The Royal Bank of Scotland",
            "Coutts & Co, subsidiary of NatWest, part of RBS Group",
            "Deutsche Bank",
            "Drummonds Bank, branch of The Royal Bank of Scotland",
            "Duncan Lawrie",
            "First Trust Bank, part of Allied Irish Banks",
            "Habib Bank AG Zurich",
            "ICICI Bank UK, part of ICICI Bank",
            "Isle of Man Bank, subsidiary of NatWest, part of RBS Group",
            "Julian Hodge Bank",
            "Kingdom Bank, independent Christian bank",
            "Kleinwort Hambros Private Bank, part of Société Générale",
            "M&S Bank, part of HSBC",
            "Metro Bank",
            "Monzo",
            "National Bank of Kuwait (International), part of the National Bank of Kuwait",
            "National Savings and Investments, an Executive Agency of the Chancellor of the Exchequer, backed by HM Treasury",
            "OneSavings Bank",
            "Raphaels Bank, independent bank established 1787",
            "Reliance Bank, owned by the Salvation Army",
            "Sainsbury’s Bank, owned by J Sainsbury plc",
            "Shawbrook Bank",
            "Starling Bank",
            "Tandem Bank",
            "Tesco Bank, owned by Tesco plc",
            "Unity Trust Bank",
            "Virgin Money, previously Northern Rock",
            "Wesleyan Bank"
        ],
        'Virgin Islands': [
            'Bevco Limited',
            'Bursatil Clearing Corporation Limited',
            'Carlsson Currency Fund Limited',
            'Chalhoub Group Limited',
            'Chemium International Corp.',
            'Cimb Limited',
            'De Shaw International',
            'Eurowire Clearing Corporation',
            'Everyoung Capital Management Limited',
            'Firstcaribbean International Bank',
            'Gordel Holdings Limited',
            'Ibis International Fund Limited',
            'Ifxbg Limited',
            'Ion Volium Strategy Limited',
            'Lim Asia Multi-strategy Fund Inc.',
            'Lim Asia Special Situations Master Fund Limited',
            'Mvm Overseas Capital Ltd',
            'Ourinvest Capital Inc',
            'Pacific Alliance Investment Management Limited',
            'Pacific Capital Group Limited',
            'Pyrrho Management Limited',
            'Quant Asset Management',
            'Ramburs Inc',
            'Scotiabank (british Virgin Islands) Ltd.',
            'Value Star Asset Management',
            'Vp Bank (bvi) Ltd'
        ],
        'Virgin Islands US': [
            "Bank Of Nova Scotia,the", 
            "Citibank, N.a."
        ],
        'Uruguay': [
            "ABN-AMRO Uruguay",
            "Banco COFAC",
            "Banco Comercial",
            "Banco de Crédito",
            "Banco Hipotecario del Uruguay",
            "Banco Montevideo",
            "Banco Real del Uruguay",
            "Banco Santander Uruguay",
            "Discount Bank Latin America (Uruguay)",
            "Banco de la República Oriental del Uruguay",
            "Banco Hipotecario del Uruguay",
            "Banco Central del Uruguay",
            "Banco Bandes Uruguay S.A.",
            "Banco Itaú Uruguay S.A.",
            "Scotiabank Uruguay S.A. (ex. Nuevo Banco Comercial S.A.)",
            "Discount Bank (Latin America) S.A.",
            "Banco Santander S.A.",
            "Banco Bilbao Vizcaya Argentaria Uruguay S.A.",
            "HSBC Bank (Uruguay) S.A.",
            "Banco Surinvest S.A.",
            "Citibank N.A. Sucursal Uruguay",
            "Lloyds TSB Bank plc",
            "Banco de la Nación Argentina"
        ],
        'Uzbekistan': [
            "National Bank for Foreign Economic Activity",
            "Asaka Bank",
            "Uzindustrialbuildingbank",
            "Paxta bank",
            "Uzsavingshousebank",
            "Galla bank",
            "Savdogarbank",
            "Uztadbirkorbank",
            "Hamkorbank",
            "Ipak Yuli Bank",
            "Turonbank",
            "People's (Narodny) Bank",
            "Parvinabank",
            "Aloqabank",
            "Biznes Bank",
            "Uzprivatbank",
            "Zamin Bank",
            "ABN-Amro Uzbekistan",
            "Trustbank",
            "Alp Jamol Bank"
        ],
        'Vanuatu': [
            "National Bank of Vanuatu",
            "Pacific Private Bank",
            "ANZ Bank Vanuatu Limited",
            "Bred Bank limited",
            "Westpac Bank"
        ],
        'Venezuela': [
            "ABN-AMRO",
            "Banco Canarias de Venezuela",
            "Banco Caracas – Grupo Financiero Bancaracas",
            "Banco Confederado",
            "Banco de Comercio Exterior (Bancoex)",
            "Banco de Venezuela – Grupo Santander",
            "Banco do Brasil Caracas",
            "Banco Federal",
            "Banco Fivenez (Banco Caracas)",
            "Banco Industrial de Venezuela – Grupo Financiero",
            "Banco Mercantil",
            "Banco Noroco",
            "Banco Occidental de Descuento, S.A.C.A.",
            "Banco Plaza",
            "Banco Provincial (BBV)",
            "Banco Sofitasa",
            "Banco Unión",
            "Banco Venezolano de Crédito",
            "Banesco",
            "Citibank Venezuela",
            "CorpBanca",
            "EUROBANCO – Banco Comercial",
            "InterBank (formerly Banco Internacional)",
            "Royal Bank of Canada Venezuela",
            "Standard Chartered"
        ],
        'Vietnam': [
            "Orient Commercial Joint Stock Bank",
            "Asia Commercial Bank",
            "Tien Phong Commercial Joint Stock Bank",
            "Hanoi Building Joint-stock Commercial Bank",
            "Maritime Commercial Joint Stock Bank",
            "Sai Gon Thuong Tin Commercial Joint-stock Bank",
            "Eastern Asia Commercial Joint Stock Bank",
            "Viet nam Export – Import Commercial Joint Stock Bank",
            "Nam A Commercial Joint Stock Bank",
            "Saigon bank for Industry & Trade",
            "Vietnam Prosperity commercial joint-stock bank",
            "Viet Nam Technological and Commercial Joint Stock Bank",
            "Military Commercial Joint Stock Bank",
            "Bac A Commercial Joint Stock Bank",
            "Vietnam International Commercial Joint Stock Bank",
            "Southeast Asia Commercial Joint Stock Bank",
            "Housing development Commercial Joint Stock Bank",
            "Southern Commercial Joint Stock Bank",
            "Viet Capital Commercial Joint Stock Bank",
            "Sai Gon Joint Stock Commercial Bank",
            "Viet A Commercial Joint Stock Bank",
            "Saigon-Hanoi Commercial Joint Stock Bank",
            "Global Petro Commercial Joint Stock Bank",
            "An Binh Commercial Joint Stock Bank",
            "Nam Viet Commercial Joint Stock Bank",
            "Kien Long Commercial Joint Stock Bank",
            "Mekong Commercial Bank",
            "Viet Nam thuong Tin Commercial Joint Stock Bank",
            "OCEAN Commercial Joint Stock Bank",
            "Petrolimex Group Commercial Joint Stock Bank",
            "Western Rural Commercial Joint Stock Bank",
            "Great Trust Joint Stock Commercial Bank",
            "Great Asia Commercial Joint Stock Bank",
            "LienViet Post Commercial Joint Stock Bank",
            "Mekong Development Joint Stock Commercial Bank",
            "Bao Viet Joint Stock Commercial Bank",
            "Western Bank (Phuong Tay Bank)",
            "Viet Nam Public Bank (PVcomBank)",
            "Tien Phong Joint Stock Commercial Bank (Tp Bank)",
            "VPBank",
            "Timo Bank",
            "Ngân hàng Công thương Việt Nam (VietinBank)",
            "Ngân hàng Ngoại thương Việt Nam",
            "Ngân hàng Nông nghiệp và Phát triển Nông thôn Việt Nam",
            "Ngân hàng Phát triển nhà đồng bằng sông Cửu Long",
            "Gate House Bank plc United Kingdom",
            "Standard Chartered Bank",
            "ANZ",
            "Citibank Vietnam",
            "Bangkok Bank",
            "BOA closed",
            "BNP Paribas",
            "Natixis",
            "Deutsche Bank",
            "Mizuho Bank",
            "HFC Bank",
            "The Bank of Tokyo-Mitsubishi UFJ",
            "Commonwealth Bank of Australia",
            "HSBC",
            "Shinhan Bank",
            "KEB Hana Bank",
            "Industrial Bank of Korea",
            "Scotiabank",
            "JP Morgan Chase Bank",
            "Bank of China",
            "Maybank",
            "Woori Bank",
            "Bank of India"
        ],
        'Yemen': [
            "National Bank of Yemen",
            "Tadhamon International Islamic Bank",
            "Yemen Commercial Bank",
            "Arab Bank Limited",
            "Calyon Credit Agricole ( CIB )",
            "Cooperative and Agricultural Credit Bank",
            "Housing Bank",
            "International Bank of Yemen",
            "Islamic Bank of Yemen for Finance and investment",
            "National Bank of Yemen",
            "Qatar National Bank",
            "Rafidan Bank",
            "Saba Islamic Bank",
            "Shamil Bank of Yemen and Bahrain",
            "Tadhamon International Islamic Bank",
            "The Yemen Bank for Reconstruction and Development",
            "United Bank Limited",
            "Yemen Commercial Bank",
            "Yemen Gulf Bank",
            "Yemen Kuwait Bank for Trade and Investment",
            "Syria Gulf Bank"
        ],
        'Zimbabwe': [
            "Merchant banks",
            "First Merchant Bank",
            "Trust Merchant Bank",
            "Universal Merchant Bank",
            "Development banks",
            "African Development Bank",
            "BancABC",
            "NMB Bank Limited",
            "CBZ Bank Limited",
            "CFX Bank, formerly CFX Bank",
            "Ecobank Zimbabwe",
            "FBC Bank",
            "Genesis Investment Bank",
            "Kingdom Bank Limited (Zimbabwe)",
            "MBCA Bank",
            "Metropolitan Bank of Zimbabwe",
            "Royal Bank Zimbabwe",
            "Stanbic Bank",
            "Standard Chartered Bank (Zimbabwe)",
            "Time Bank of Zimbabwe",
            "Trust Banking Corporation",
            "Zimbabwe Allied Banking Group",
            "Nedbank Zimbabwe Limited",
            "Metbank",
            "Steward Bank",
            "ZB Bank Limited",
            "Access Bank Zambia",
            "Barclays Bank"
        ],
        'Zambia': [
            "BancABC",
            "Bank of China",
            "Barclays Bank",
            "Cavmont Bank",
            "Citibank",
            "Ecobank",
            "Finance Bank Zambia Limited",
            "First Alliance Bank Zambia Limited",
            "First National Bank (South Africa)",
            "Indo-Zambia Bank Limited",
            "Intermarket Bank",
            "International Commercial Bank",
            "Investrust Bank",
            "Stanbic Bank",
            "Standard Chartered Bank (Zambia)",
            "United Bank for Africa",
            "Zambia National Commercial Bank"
        ]

    };



    