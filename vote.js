

document.addEventListener("DOMContentLoaded",function(){
    fetch("https://localhost:9090/votingsystem/candidates")
    .then((res) => res.json())
    .then((candidates) => {
        let candidateBox = document.querySelector(".candidateId");

        candidates.forEach((candidate,index) => {
            let id = document.createElement("option");
            id.value=candidate.candidateId;
            id.innerHTML=`${id.value} - ${candidate.candidateName} - ${candidate.region}`;

            candidateBox.append(id);
        });
    });
});

let voteForm = document.querySelector(".voteForm");

voteForm.addEventListener("submit",function(event){
    event.preventDefault();

    let voterIdInput = document.querySelector(".voterId");
    let emailIdInput = document.querySelector(".emailId");

    fetch("http://localhost:9090/votingsystem")
        .then((res) => res.json())
        .then((votes) => {
            let voteExists = votes.some(vote => vote.voterId === voterIdInput.value || vote.emailId === emailIdInput.value);

            if (voteExists) {
                console.log("Your Vote Already Exists.. Redirecting...");
                window.location.href = "result.html";
            } else {
                voteForm.submit();
            }
        })
        .catch((err) => console.error("Error fetching users:", err));
})

