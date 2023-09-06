
    const iframe = document.getElementById("iframe");
    const resume1Button = document.getElementById("resume1Button");
    const resume2Button = document.getElementById("resume2Button");

    function changeIframeSrc(src) {
        
        switch (src) {
            case 'SWE':
                src = './assets/Justin_Kilburn_Resume.pdf'
                resume1Button.disabled = true;
                resume1Button.style.backgroundColor = 'lightgray';
                resume2Button.disabled = false;
                resume2Button.style.backgroundColor = '';
                break;
            case 'PM':
                src = './assets/Justin_Kilburn_PM_Resume.pdf'
                resume2Button.disabled = true;
                resume2Button.style.backgroundColor = 'lightgray';
                resume1Button.disabled = false;
                resume1Button.style.backgroundColor = '';
                break;
            default:
                break;
        }

        iframe.src = src;
    }

        
    changeIframeSrc('SWE');