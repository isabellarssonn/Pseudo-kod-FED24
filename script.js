// G-Version - Split the Nota
// Skriv din pseudokod innanför nedanstående kommentarsblock
/*

1. Användaren matar in Summa
2. Användaren matar in AntalVänner
3. Användaren matar in Dricks (i decimalform)

4. Beräkna DricksBelopp = Summa * Dricks
5. Beräkna TotalMedDricks = Summa + DricksBelopp
6. Beräkna SummaPerPerson = TotalMedDricks / AntalVänner

7. Visa resultat genom texten "Varje person ska betala"
8. Visa värdet av SummaPerPerson i kronor

*/

// VG-Version - Lewis Carroll Word Puzzle
// Skriv din pseudokod innanför nedanstående kommentarsblock
// Startkoden är 100% frivillig och kan tas bort eller skrivas om
/*

play();

function play()
    SET variabel ordbok = [FOUR, FOUL, FOOL, FOOT, FORT, FORE, FIRE, FIVE]; // Innehåller ALLA ord i det engelska språket
    SET variabel startOrd till "FOUR";
    SET variabel slutOrd till "FIVE";
    SET variabel nuvarandeOrd till "startOrd";

    WHILE nuvarandeOrd !== slutOrd
        INPUT "Ange ett nytt ord: " till variabel nyttOrd;

        IF nyttOrd inte finns i ordbok
            OUTPUT "Ogiltigt ord! Ordet finns inte i ordboken.";
        ELSE IF inte isOneLetterApart(nuvarandeOrd, nyttOrd)
            OUTPUT "Ogiltigt drag! Du får bara ändra en bokstav åt gången.";
        ELSE
            SET nuvarandeOrd = nyttOrd;
            OUTPUT "Nuvarande ord: " + nuvarandeOrd;
        END IF
    END WHILE

    OUTPUT "Grattis! Du har klarat spelet och nått slutordet: " + slutOrd;

end function

function isOneLetterApart(wordOne, wordTwo)
    IF LENGTH(wordOne) !== LENGTH(wordTwo)
        RETURN false;
    END IF

    SET variabel diffCount till 0;

    FOR i från 0 till LENGTH(wordOne) - 1
        IF wordOne [i] !== wordTwo[i]
            SET diffCount = diffCount + 1;
        END IF

        IF diffCount > 1
            RETURN false;
        END IF
    END FOR

    return diffCount === 1; // returnerar sant om endast en bokstav ändrats, annars falskt
end function

*/