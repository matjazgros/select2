/*! Select2 4.0.5 | https://github.com/select2/select2/blob/master/LICENSE.md */

!function(){if(jQuery&&jQuery.fn&&jQuery.fn.select2&&jQuery.fn.select2.amd)var e=jQuery.fn.select2.amd;e.define("select2/i18n/sk",[],function(){var e={2:function(e){return e?"dva":"dve"},3:function(){return"tri"},4:function(){return"štyri"}};return{errorLoading:function(){return"Výsledky sa nepodarilo načítať."},inputTooLong:function(n){var a=n.input.length-n.maximum;return 1==a?"Prosím, zadajte o jeden znak menej":a>=2&&a<=4?"Prosím, zadajte o "+e[a](!0)+" znaky menej":"Prosím, zadajte o "+a+" znakov menej"},inputTooShort:function(n){var a=n.minimum-n.input.length;return 1==a?"Prosím, zadajte ešte jeden znak":a<=4?"Prosím, zadajte ešte ďalšie "+e[a](!0)+" znaky":"Prosím, zadajte ešte ďalších "+a+" znakov"},loadingMore:function(){return"Načítanie ďalších výsledkov…"},maximumSelected:function(n){return 1==n.maximum?"Môžete zvoliť len jednu položku":n.maximum>=2&&n.maximum<=4?"Môžete zvoliť najviac "+e[n.maximum](!1)+" položky":"Môžete zvoliť najviac "+n.maximum+" položiek"},noResults:function(){return"Nenašli sa žiadne položky"},searching:function(){return"Vyhľadávanie…"}}}),e.define,e.require}();