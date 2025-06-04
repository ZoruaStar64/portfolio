import React, {useState} from 'react';
import '../index.js';

function SkillsAbout({toggleStyle}) {
    return (
        <div>
            
            {/* theme toggle for Skill about section */}
            {toggleStyle === 'Light' ?
            <div className='skillsSoftAbout'>
                <div className='e-wiseSoftAbout skillsSoftCommon'>
                    <h3>E-Wise (Laravel):</h3>
                    <p>
                        Voordat ik bij E-Wise stageliep heb ik tijdens de zomervakantie van 2022 een oefeningproject gedaan waarin ik de basis van Laravel geleerd heb.<br></br>
                        Ik gebruikte de TechStack van Laravel, Tailwindcss, PHPUnit en Vite tijdens dit project.<br></br>
                        Terwijl ik bij E-Wise stageliep heb ik aan de backend gewerkt met Laravel, PHPUnit en AlpineJS.<br></br>
                        Dit is samen gedaan in teamverband met een aantal E-Wise medewerkers, gebruikmakend van de Scrum methode.
                    </p>
                </div>
                <div className='pvAlmereSoftAbout skillsSoftCommon'>
                    <h3>Personeelsvereniging Almere (HTML, CSS, JS, MYSQL, PHP & meer):</h3>
                    <p> 
                        Tijdens het 1ste schooljaar van mijn Associates Degree studie hebben ik en 3 klasgenoten gewerkt aan een nieuwe Personeelsvereniging website voor de gemeente Almere.<br></br>
                        Mijn contributies aan tijdens dit project lagen vooral aan de backend, met een klein beetje frontend.<br></br>
                        Waar ik de meeste tijd aan bestede waren Mollie voor betaalformulieren en PHPSpreadsheet<br></br> 
                        om met weinig moeite hun Database te kunnen exporteren als een Excel bestand en het te kunnen updaten met gebruik van de Excelsheets die zij geleverd krijgen.<br></br>
                        Het importeer proces kijkt zorgvuldig of er nieuwe leden aangemaakt moeten worden, leden moet verwijderen of de gegevens van leden uit de database moet updaten.<br></br>
                        Nadat het project vanuit school eindigde was ik persoonlijk nog niet helemaal tevreden over de kwaliteit van het product dat wij achterlieten.<br></br>
                        Vanwege deze reden had ik aangeboden om tijdens de zomervakantie een paar extra updates uit te voeren, alhoewel ik kreeg afentoe een aantal verzoeken om nog een aantal dingen toe te voegen of aan te passen.<br></br>
                        Dit zorgde er voor dat het meer een impromptu zomerbaantje werd. Ik vond dit niet al te erg, omdat ik hierdoor tijdens de zomervakantie kon werken aan het communiceren met een klant.
                    </p>
                </div>
                <div className='geckotechSoftAbout skillsSoftCommon'>
                    <h3>GeckoTech (Rust, Actix Web, HTMX en Tera):</h3>
                    <p>
                        Tijdens het 2de schooljaar van mijn Associates Degree opleiding heb ik samen met een klasgenoot stagegelopen bij GeckoTech.
                        Wij moesten hier meet een compleet nieuwe TechStack werken bestaand uit: Rust, Actix Web, Tera en HTMX.<br></br>
                        Het was voor ons beide een lastige taak, maar uiteindelijk snapte wij hoe de vier verschillende onderdelen van onze TechStack samenwerkten.
                        Wij werkte om de beurt aan een verschillende kant (Front/Back-end) van de applicatie, om zo een gevoel te krijgen voor beide gedeeltes van Rust.<br></br>
                        Tijdens dit hebben wij ook geleerd hoe verschillende soorten testen werktten (unit tests, Integration tests en End-to-end tests).
                    </p>
                </div>
                <div className='databaseSoftAbout skillsSoftCommon'>
                    <h3>Databases maken:</h3>
                    <p>
                        Voor de vele projecten waar ik aan gewerkt heb, heb ik ook de gelegenheid gehad om voor deze projecten databases te maken.<br></br>
                        Ik heb voor mijn Fullstack project (Startracker) een database gemaakt, waarin gebruikers een account kunnen aanmaken en verzamelde voorwerpen kunnen markeren als gevonden.<br></br>
                        Voor E-Wise heb ik ook een database gemaakt (onder begeleiding van een Senior developer) voor de Turtlebank V2 project. Hierdoor heb ik wat meer geleerd over hoe je goed databases in elkaar moet zetten.<br></br>
                        Tijdens het maken van de vernieuwde Personeelsvereniging website van de gemeente Almere heb ik samen met een klasgenoot aan een database gewerkt.<br></br> 
                        Alhoewel er later vanuit mij veel updates eraan kwamen vanwege nieuwe toevoegingen/informatie.
                    </p>
                </div>
                <div className='cSharpSoftAbout skillsSoftCommon'>
                    <h3>C#/Unity:</h3>
                    <p>
                        De eerste keer dat ik in aanraking met C# kwam was toen ik tijdens mijn MBO opleiding aan het keuzedeel Basis programmeren van videogames werkte.<br></br>
                        Hierbij heb ik geleerd hoe ik met Unity moest omgaan en met Visual Studio C# code kon creeren, alhoewel Unity's C# heel erg verschilt van de normale C#.<br></br>
                        Deze project hou ik voor nu liever prive, omdat ik van plan ben om het als een complete videogame series te maken.<br></br>
                        Daarintegen ben ik wel van plan om binnen de "Projects" gedeelte van deze website het zijn eigen plaats te geven die continu updates zal krijgen.<br></br>
                        Naast mijn Unity project heb ik nog aan twee andere projecten gewerkt, deze keren binnen een team van 4 medestudenten (inclusief mijzelf).<br></br>
                        Tijdens de 3rde periode binnen het 1ste jaar van mijn HBO opleiding hadden wij gewerkt aan een basis C# spel als een console applicatie.<br></br>
                        Het spel zou origineel vele groter zijn, maar in verband met de tijd besloten wij het te houden als een recreatie van pac-man.<br></br>
                        Binnen de "Projects" gedeelte zal er hier ook een vakje voor bestaan waarin het de originele concept van het spel zal uitleggen.<br></br>
                        Tijdens de 4de periode van hetzelfde schooljaar moesten wij een web-applicatie maken voor een fictieve dierentuin.<br></br>
                        De TechStack die wij hierbij moesten gebruiken was: C#, .Net en een SQLite database (i.v.m de volgende regel tekst).<br></br>
                        Wij moesten ook gebruik maken van Docker, GitHub Actions en Yaml om het project te kunnen verbinden met een Kubernetes cluster van de opleiding.<br></br>
                        Ik was tijdens deze periode een van de weinige die enigzins snapte hoe het verbinden aan het cluster werkte.<br></br>
                        Dit kwam voornamelijk omdat ik meerdere dagen tot 17:00 op school bleef, meerdere vragen aan de docenten stelde en heel, heel veel onderzoek.<br></br>
                        Na al dit kwam ik iniedergeval het verschil tussen C# en Unity's C# goed tegen.
                    </p>
                </div>
                <div className='miscSoftAbout skillsSoftCommon'>
                    <h3>Misc:</h3>
                    <p>
                        Hier volgt een snelle opsomming van overige dingen die ik gedaan heb:<br></br>
                        1: Aan het begin van mijn MBO opleiding heb ik een Java opdracht van school gekregen, deze heb ik later omgezet naar Javascript<br></br>
                        2: Tijdens de MBO opleiding kwam ik erachter dat alle code van de Javascript module's eindopdracht (Memory) publiekelijk op een van de docent's website's stond.<br></br>
                        Ik had destijds bedoelt om de code als een hulpmiddel te gebruiken, maar uiteindelijk was het vrijwel klakkeloos overgekopieerd.<br></br>
                        Hier voelde ik mij niet trots op, dus ik besloot een compleet nieuwe project te maken gebaseerd op Yathzee.<br></br>
                        De docenten waren positief onder de indruk, zo positief dat ze zelfs besloten de originele opdracht te vervangen met mijn idee, en ik kreeg een cijfer boven de hoogste die te behalen was in het systeem.
                    </p>
                </div>
            </div>
            : toggleStyle === 'Dark' ?
            <div className='skillsSoftAbout whiteText'>
                <div className='e-wiseSoftAbout skillsSoftCommon'>
                    <h3>E-Wise (Laravel):</h3>
                    <p>
                        Voordat ik bij E-Wise stageliep heb ik tijdens de zomervakantie van 2022 een oefeningproject gedaan waarin ik de basis van Laravel geleerd heb.<br></br>
                        Ik gebruikte de TechStack van Laravel, Tailwindcss, PHPUnit en Vite tijdens dit project.<br></br>
                        Terwijl ik bij E-Wise stageliep heb ik aan de backend gewerkt met Laravel, PHPUnit en AlpineJS.<br></br>
                        Dit is samen gedaan in teamverband met een aantal E-Wise medewerkers, gebruikmakend van de Scrum methode.
                    </p>
                </div>
                <div className='pvAlmereSoftAbout skillsSoftCommon'>
                    <h3>Personeelsvereniging Almere (HTML, CSS, JS, MYSQL, PHP & meer):</h3>
                    <p> 
                        Tijdens het 1ste schooljaar van mijn Associates Degree studie hebben ik en 3 klasgenoten gewerkt aan een nieuwe Personeelsvereniging website voor de gemeente Almere.<br></br>
                        Mijn contributies aan tijdens dit project lagen vooral aan de backend, met een klein beetje frontend.<br></br>
                        Waar ik de meeste tijd aan bestede waren Mollie voor betaalformulieren en PHPSpreadsheet<br></br> 
                        om met weinig moeite hun Database te kunnen exporteren als een Excel bestand en het te kunnen updaten met gebruik van de Excelsheets die zij geleverd krijgen.<br></br>
                        Het importeer proces kijkt zorgvuldig of er nieuwe leden aangemaakt moeten worden, leden moet verwijderen of de gegevens van leden uit de database moet updaten.<br></br>
                        Nadat het project vanuit school eindigde was ik persoonlijk nog niet helemaal tevreden over de kwaliteit van het product dat wij achterlieten.<br></br>
                        Vanwege deze reden had ik aangeboden om tijdens de zomervakantie een paar extra updates uit te voeren, alhoewel ik kreeg afentoe een aantal verzoeken om nog een aantal dingen toe te voegen of aan te passen.<br></br>
                        Dit zorgde er voor dat het meer een impromptu zomerbaantje werd. Ik vond dit niet al te erg, omdat ik hierdoor tijdens de zomervakantie kon werken aan het communiceren met een klant.
                    </p>
                </div>
                <div className='geckotechSoftAbout skillsSoftCommon'>
                    <h3>GeckoTech (Rust, Actix Web, HTMX en Tera):</h3>
                    <p>
                        Tijdens het 2de schooljaar van mijn Associates Degree opleiding heb ik samen met een klasgenoot stagegelopen bij GeckoTech.
                        Wij moesten hier meet een compleet nieuwe TechStack werken bestaand uit: Rust, Actix Web, Tera en HTMX.<br></br>
                        Het was voor ons beide een lastige taak, maar uiteindelijk snapte wij hoe de vier verschillende onderdelen van onze TechStack samenwerkten.
                        Wij werkte om de beurt aan een verschillende kant (Front/Back-end) van de applicatie, om zo een gevoel te krijgen voor beide gedeeltes van Rust.<br></br>
                        Tijdens dit hebben wij ook geleerd hoe verschillende soorten testen werktten (unit tests, Integration tests en End-to-end tests).
                    </p>
                </div>
                <div className='databaseSoftAbout skillsSoftCommon'>
                    <h3>Databases maken:</h3>
                    <p>
                        Voor de vele projecten waar ik aan gewerkt heb, heb ik ook de gelegenheid gehad om voor deze projecten databases te maken.<br></br>
                        Ik heb voor mijn Fullstack project (Startracker) een database gemaakt, waarin gebruikers een account kunnen aanmaken en verzamelde voorwerpen kunnen markeren als gevonden.<br></br>
                        Voor E-Wise heb ik ook een database gemaakt (onder begeleiding van een Senior developer) voor de Turtlebank V2 project. Hierdoor heb ik wat meer geleerd over hoe je goed databases in elkaar moet zetten.<br></br>
                        Tijdens het maken van de vernieuwde Personeelsvereniging website van de gemeente Almere heb ik samen met een klasgenoot aan een database gewerkt.<br></br> 
                        Alhoewel er later vanuit mij veel updates eraan kwamen vanwege nieuwe toevoegingen/informatie.
                    </p>
                </div>
                <div className='cSharpSoftAbout skillsSoftCommon'>
                    <h3>C#/Unity:</h3>
                    <p>
                        De eerste keer dat ik in aanraking met C# kwam was toen ik tijdens mijn MBO opleiding aan het keuzedeel Basis programmeren van videogames werkte.<br></br>
                        Hierbij heb ik geleerd hoe ik met Unity moest omgaan en met Visual Studio C# code kon creeren, alhoewel Unity's C# heel erg verschilt van de normale C#.<br></br>
                        Deze project hou ik voor nu liever prive, omdat ik van plan ben om het als een complete videogame series te maken.<br></br>
                        Daarintegen ben ik wel van plan om binnen de "Projects" gedeelte van deze website het zijn eigen plaats te geven die continu updates zal krijgen.<br></br>
                        Naast mijn Unity project heb ik nog aan twee andere projecten gewerkt, deze keren binnen een team van 4 medestudenten (inclusief mijzelf).<br></br>
                        Tijdens de 3rde periode binnen het 1ste jaar van mijn HBO opleiding hadden wij gewerkt aan een basis C# spel als een console applicatie.<br></br>
                        Het spel zou origineel vele groter zijn, maar in verband met de tijd besloten wij het te houden als een recreatie van pac-man.<br></br>
                        Binnen de "Projects" gedeelte zal er hier ook een vakje voor bestaan waarin het de originele concept van het spel zal uitleggen.<br></br>
                        Tijdens de 4de periode van hetzelfde schooljaar moesten wij een web-applicatie maken voor een fictieve dierentuin.<br></br>
                        De TechStack die wij hierbij moesten gebruiken was: C#, .Net en een SQLite database (i.v.m de volgende regel tekst).<br></br>
                        Wij moesten ook gebruik maken van Docker, GitHub Actions en Yaml om het project te kunnen verbinden met een Kubernetes cluster van de opleiding.<br></br>
                        Ik was tijdens deze periode een van de weinige die enigzins snapte hoe het verbinden aan het cluster werkte.<br></br>
                        Dit kwam voornamelijk omdat ik meerdere dagen tot 17:00 op school bleef, meerdere vragen aan de docenten stelde en heel, heel veel onderzoek.<br></br>
                        Na al dit kwam ik iniedergeval het verschil tussen C# en Unity's C# goed tegen.
                    </p>
                </div>
                <div className='miscSoftAbout skillsSoftCommon'>
                    <h3>Misc:</h3>
                    <p>
                        Hier volgt een snelle opsomming van overige dingen die ik gedaan heb:<br></br>
                        1: Aan het begin van mijn MBO opleiding heb ik een Java opdracht van school gekregen, deze heb ik later omgezet naar Javascript<br></br>
                        2: Tijdens de MBO opleiding kwam ik erachter dat alle code van de Javascript module's eindopdracht (Memory) publiekelijk op een van de docent's website's stond.<br></br>
                        Ik had destijds bedoelt om de code als een hulpmiddel te gebruiken, maar uiteindelijk was het vrijwel klakkeloos overgekopieerd.<br></br>
                        Hier voelde ik mij niet trots op, dus ik besloot een compleet nieuwe project te maken gebaseerd op Yathzee.<br></br>
                        De docenten waren positief onder de indruk, zo positief dat ze zelfs besloten de originele opdracht te vervangen met mijn idee, en ik kreeg een cijfer boven de hoogste die te behalen was in het systeem.
                    </p>
                </div>
            </div>
            :
            //Default
            <div className='skillsSoftAbout whiteText'>
                <div className='e-wiseSoftAbout skillsSoftCommon'>
                    <h3>E-Wise (Laravel):</h3>
                    <p>
                        Voordat ik bij E-Wise stageliep heb ik tijdens de zomervakantie van 2022 een oefeningproject gedaan waarin ik de basis van Laravel geleerd heb.<br></br>
                        Ik gebruikte de TechStack van Laravel, Tailwindcss, PHPUnit en Vite tijdens dit project.<br></br>
                        Terwijl ik bij E-Wise stageliep heb ik aan de backend gewerkt met Laravel, PHPUnit en AlpineJS.<br></br>
                        Dit is samen gedaan in teamverband met een aantal E-Wise medewerkers, gebruikmakend van de Scrum methode.
                    </p>
                </div>
                <div className='pvAlmereSoftAbout skillsSoftCommon'>
                    <h3>Personeelsvereniging Almere (HTML, CSS, JS, MYSQL, PHP & meer):</h3>
                    <p> 
                        Tijdens het 1ste schooljaar van mijn Associates Degree studie hebben ik en 3 klasgenoten gewerkt aan een nieuwe Personeelsvereniging website voor de gemeente Almere.<br></br>
                        Mijn contributies aan tijdens dit project lagen vooral aan de backend, met een klein beetje frontend.<br></br>
                        Waar ik de meeste tijd aan bestede waren Mollie voor betaalformulieren en PHPSpreadsheet<br></br> 
                        om met weinig moeite hun Database te kunnen exporteren als een Excel bestand en het te kunnen updaten met gebruik van de Excelsheets die zij geleverd krijgen.<br></br>
                        Het importeer proces kijkt zorgvuldig of er nieuwe leden aangemaakt moeten worden, leden moet verwijderen of de gegevens van leden uit de database moet updaten.<br></br>
                        Nadat het project vanuit school eindigde was ik persoonlijk nog niet helemaal tevreden over de kwaliteit van het product dat wij achterlieten.<br></br>
                        Vanwege deze reden had ik aangeboden om tijdens de zomervakantie een paar extra updates uit te voeren, alhoewel ik kreeg afentoe een aantal verzoeken om nog een aantal dingen toe te voegen of aan te passen.<br></br>
                        Dit zorgde er voor dat het meer een impromptu zomerbaantje werd. Ik vond dit niet al te erg, omdat ik hierdoor tijdens de zomervakantie kon werken aan het communiceren met een klant.
                    </p>
                </div>
                <div className='geckotechSoftAbout skillsSoftCommon'>
                    <h3>GeckoTech (Rust, Actix Web, HTMX en Tera):</h3>
                    <p>
                        Tijdens het 2de schooljaar van mijn Associates Degree opleiding heb ik samen met een klasgenoot stagegelopen bij GeckoTech.
                        Wij moesten hier meet een compleet nieuwe TechStack werken bestaand uit: Rust, Actix Web, Tera en HTMX.<br></br>
                        Het was voor ons beide een lastige taak, maar uiteindelijk snapte wij hoe de vier verschillende onderdelen van onze TechStack samenwerkten.
                        Wij werkte om de beurt aan een verschillende kant (Front/Back-end) van de applicatie, om zo een gevoel te krijgen voor beide gedeeltes van Rust.<br></br>
                        Tijdens dit hebben wij ook geleerd hoe verschillende soorten testen werktten (unit tests, Integration tests en End-to-end tests).
                    </p>
                </div>
                <div className='databaseSoftAbout skillsSoftCommon'>
                    <h3>Databases maken:</h3>
                    <p>
                        Voor de vele projecten waar ik aan gewerkt heb, heb ik ook de gelegenheid gehad om voor deze projecten databases te maken.<br></br>
                        Ik heb voor mijn Fullstack project (Startracker) een database gemaakt, waarin gebruikers een account kunnen aanmaken en verzamelde voorwerpen kunnen markeren als gevonden.<br></br>
                        Voor E-Wise heb ik ook een database gemaakt (onder begeleiding van een Senior developer) voor de Turtlebank V2 project. Hierdoor heb ik wat meer geleerd over hoe je goed databases in elkaar moet zetten.<br></br>
                        Tijdens het maken van de vernieuwde Personeelsvereniging website van de gemeente Almere heb ik samen met een klasgenoot aan een database gewerkt.<br></br> 
                        Alhoewel er later vanuit mij veel updates eraan kwamen vanwege nieuwe toevoegingen/informatie.
                    </p>
                </div>
                <div className='cSharpSoftAbout skillsSoftCommon'>
                    <h3>C#/Unity:</h3>
                    <p>
                        De eerste keer dat ik in aanraking met C# kwam was toen ik tijdens mijn MBO opleiding aan het keuzedeel Basis programmeren van videogames werkte.<br></br>
                        Hierbij heb ik geleerd hoe ik met Unity moest omgaan en met Visual Studio C# code kon creeren, alhoewel Unity's C# heel erg verschilt van de normale C#.<br></br>
                        Deze project hou ik voor nu liever prive, omdat ik van plan ben om het als een complete videogame series te maken.<br></br>
                        Daarintegen ben ik wel van plan om binnen de "Projects" gedeelte van deze website het zijn eigen plaats te geven die continu updates zal krijgen.<br></br>
                        Naast mijn Unity project heb ik nog aan twee andere projecten gewerkt, deze keren binnen een team van 4 medestudenten (inclusief mijzelf).<br></br>
                        Tijdens de 3rde periode binnen het 1ste jaar van mijn HBO opleiding hadden wij gewerkt aan een basis C# spel als een console applicatie.<br></br>
                        Het spel zou origineel vele groter zijn, maar in verband met de tijd besloten wij het te houden als een recreatie van pac-man.<br></br>
                        Binnen de "Projects" gedeelte zal er hier ook een vakje voor bestaan waarin het de originele concept van het spel zal uitleggen.<br></br>
                        Tijdens de 4de periode van hetzelfde schooljaar moesten wij een web-applicatie maken voor een fictieve dierentuin.<br></br>
                        De TechStack die wij hierbij moesten gebruiken was: C#, .Net en een SQLite database (i.v.m de volgende regel tekst).<br></br>
                        Wij moesten ook gebruik maken van Docker, GitHub Actions en Yaml om het project te kunnen verbinden met een Kubernetes cluster van de opleiding.<br></br>
                        Ik was tijdens deze periode een van de weinige die enigzins snapte hoe het verbinden aan het cluster werkte.<br></br>
                        Dit kwam voornamelijk omdat ik meerdere dagen tot 17:00 op school bleef, meerdere vragen aan de docenten stelde en heel, heel veel onderzoek.<br></br>
                        Na al dit kwam ik iniedergeval het verschil tussen C# en Unity's C# goed tegen.
                    </p>
                </div>
                <div className='miscSoftAbout skillsSoftCommon'>
                    <h3>Misc:</h3>
                    <p>
                        Hier volgt een snelle opsomming van overige dingen die ik gedaan heb:<br></br>
                        1: Aan het begin van mijn MBO opleiding heb ik een Java opdracht van school gekregen, deze heb ik later omgezet naar Javascript<br></br>
                        2: Tijdens de MBO opleiding kwam ik erachter dat alle code van de Javascript module's eindopdracht (Memory) publiekelijk op een van de docent's website's stond.<br></br>
                        Ik had destijds bedoelt om de code als een hulpmiddel te gebruiken, maar uiteindelijk was het vrijwel klakkeloos overgekopieerd.<br></br>
                        Hier voelde ik mij niet trots op, dus ik besloot een compleet nieuwe project te maken gebaseerd op Yathzee.<br></br>
                        De docenten waren positief onder de indruk, zo positief dat ze zelfs besloten de originele opdracht te vervangen met mijn idee, en ik kreeg een cijfer boven de hoogste die te behalen was in het systeem.
                    </p>
                </div>
            </div>
            }
        
        </div>
    );
}

export default SkillsAbout;