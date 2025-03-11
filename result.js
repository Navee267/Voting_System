
document.addEventListener("DOMContentLoaded", function () {
    fetch("http://localhost:9090/votingsystem/result")
        .then((res) => res.json())
        .then((data) => {
            let resultBox = document.querySelector(".voteResults");
            resultBox.innerHTML = "";

            data.forEach(candidate => {
                let p = document.createElement("p");
                p.textContent = `Candidate Id ${candidate.candidateId}: ${candidate.voteCount} votes`;
                resultBox.appendChild(p);
            });
        })
        .catch((error) => console.error("Error fetching vote counts:", error));
});