    const virusData = {
        flu: "Influenza is a contagious respiratory illness caused by flu viruses. Symptoms include fever, cough, and body aches. It spreads through respiratory droplets and surfaces.",
        hepatitis: "Hepatitis affects the liver and can cause symptoms like jaundice, fatigue, and abdominal pain. It can be caused by viruses, alcohol, or toxins.",
        hiv: "HIV attacks the immune system, specifically CD4 cells. Without treatment, it can lead to AIDS. It spreads through blood, semen, and other bodily fluids."
    };

    virusElements.forEach(virus => {
        virus.addEventListener("click", () => {
            const virusKey = virus.dataset.virus;
            virusDescription.textContent = virusData[virusKey] || "Information not available.";
            virusInfo.classList.remove("hidden");
        });
    });

    const toggleTipsButton = document.getElementById("toggle-tips");
    const preventionTips = document.getElementById("prevention-tips");

    toggleTipsButton.addEventListener("click", () => {
        preventionTips.classList.toggle("hidden");
        toggleTipsButton.textContent = preventionTips.classList.contains("hidden") ? "Show Tips" : "Hide Tips";
    });
});
