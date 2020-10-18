(() => {
    // make an AJAX request using Fetch API 
    fetch('.data/classData.json')
    .then(res =>res.json())
    .then(data => {
        console.log(data);

        //handleData
        //here's where you would call the function that puts the pieces on the page
        function handleDataset(data) {
            let panelBuild = document.querySelector(".profPanel");
        }

        for (let user in myData) {
            let profDisplay = panelBuild.cloneNode(true),
                profDisplayText = profDisplay.querySelector('.panel').children;
            
            profDisplayText[1].textContent = [].coursename;
            profDisplayText[2].textContent = [].coursecode;
            profDisplayText[3].innerHTML = [].profname;
            profDisplayText[4].innerHTML = [].classtime;

            profPanel.appendChild(profDisplay);
        }
        //function handleDataSet(data) {
          //  profPanel = document.querySelector(".profPanelText").content;
        // document.getElementById(".text-muted").innerHTML = "coursename";
        })
    .catch((err) => {
        console.log(err);
    })
   
})();