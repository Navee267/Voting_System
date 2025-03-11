
let images = [
    "https://png.pngtree.com/png-clipart/20231006/ourmid/pngtree-handsome-businessman-transparent-background-png-image_10194933.png",
    "https://png.pngtree.com/png-vector/20240913/ourmid/pngtree-successful-businessman-png-image_12923925.png",
    "https://png.pngtree.com/png-vector/20240419/ourmid/pngtree-a-happy-corporate-business-professional-one-man-in-an-empty-background-png-image_12298579.png"
];


document.addEventListener("DOMContentLoaded", function () {
    fetch("http://localhost:9090/votingsystem/candidates")
        .then((res) => res.json())
        .then((candidates) => {
            let candidateDivs = document.querySelectorAll(".candidates > div");

            candidates.forEach((candidate, index) => {
                if (candidateDivs[index]) { 
                    let img = candidateDivs[index].querySelector("img");
                    let candidateInfo = document.createElement("p");
                    let link = document.createElement("a");
                    link.href="vote.html";
                 
                    img.src = images[index];
                    img.alt = candidate.candidateName;

                    candidateInfo.innerHTML = `<strong>ID:</strong> ${candidate.candidateId} <br>
                                               <strong>Name:</strong> ${candidate.candidateName} <br>
                                               <strong>Region:</strong> ${candidate.region}<br>
                                               <a href="vote.html"><button>Vote Now</button></a>`;
                    
                    candidateDivs[index].appendChild(candidateInfo); 
                }
            });
        })
        .catch(error => console.error("Error fetching candidates:", error));
});
