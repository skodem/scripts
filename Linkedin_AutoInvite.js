// AutoInvite to HR/Recruiters from "People You May Know" for Linkedin.
// by Fuad Shukurov (https://linkedin.com/in/fuad-shukurov)

var loc = location.pathname.split('/');
if (loc[1].toLowerCase() === 'mynetwork' && loc[2].toLowerCase() === '') {
    var i = 0;
    var j = 0;
    var max = 1500; // The maximum allowable number of profile cards on one page, if you have a weak PC, you can REDUCE this number so that the script stops before the page starts to slow down from overload.
    var repSec = 0.5; // The speed of checking one profile in seconds, you can INCREAE this value a little if you have a low Internet speed.
    document.querySelector("ul.artdeco-card.mb4").style.display = "none";
    window.scrollTo(0, document.body.scrollHeight);
    var searchPers = setInterval(function() {
        var pymk = document.querySelector("div[data-launchpad-scroll-anchor='pymk']");
        var names = pymk.querySelectorAll('span.discover-person-card__name');
        var jobs = pymk.querySelectorAll("span.discover-person-card__occupation");
        var btns = pymk.querySelectorAll('button.artdeco-button--secondary');
        var limit = document.querySelector('#artdeco-modal-outlet .ip-fuse-limit-alert');
        if (limit) {
            console.log('The script STOPPED working due to a Linkedin Invitation Restrictions. Please, try again a few hours later, if it doesn\'t work again, recommend to read: https://linkedin.com/help/linkedin/topics/6096/6097/4800. ' + i + ' users checked, ' + j + ' invitations sent.');
            clearInterval(searchPers);
        } else if (i > max) {
            console.log('The script STOPPED due to' + max + 'th user checked. Please, REFRESH the page and try again. ' + j + ' invitations sent.');
            clearInterval(searchPers);
        }
        if (i < jobs.length) {
            if (jobs[i].innerText.indexOf("HR") !== -1) {
                btns[i].click();
                j++;
                console.log(j + '. ' + names[i].innerText + ": " + jobs[i].innerText);
            } else if (jobs[i].innerText.indexOf("Human Resource") !== -1) {
                btns[i].click();
                j++;
                console.log(j + '. ' + names[i].innerText + ": " + jobs[i].innerText);
            } else if (jobs[i].innerText.indexOf("Recruit") !== -1) {
                btns[i].click();
                j++;
                console.log(j + '. ' + names[i].innerText + ": " + jobs[i].innerText);
            }
            i++;
        } else {
            window.scrollTo(0, document.body.scrollHeight);
        }
    }, repSec*1000);
} else {
    console.log('You are on the WRONG page. The script works only on the page: https://linkedin.com/mynetwork/');
}
