        // document.addEventListener("DOMContentLoaded", function() {

        //     const apiUrl = "https://restcountries.com/v3.1/all";
          
           
        //     fetch(apiUrl)
        //       .then(response => response.json())
        //       .then(data => {
        //         const countrySelect = document.getElementById("country");
          
               
        //         data.forEach(country => {
        //           const countryCode = country.idd && country.idd.root ? country.idd.root + country.idd.suffixes[0] : null;
        //           if (countryCode) {
        //             const option = document.createElement("option");
        //             option.value = countryCode;
        //             option.textContent = `${country.name.common} `;
        //             countrySelect.appendChild(option);
        //           }
        //         });
        //       })
        //       .catch(error => console.error("Error fetching country data:", error));
          
            
        //     document.getElementById("country").addEventListener("change", function() {
        //       const selectedCountryCode = this.value;
        //       const phoneInput = document.getElementById("phone_number");
          
              
        //       if (selectedCountryCode) {
        //         phoneInput.value = selectedCountryCode + " "; 
        //       } else {
        //         phoneInput.value = ""; 
        //       }
        //     });
        //   });

          // fetch("https://restcountries.com/v3.1/all")
          // .then(response => response.json())
          // .then(countries => {
          //     const dropdown = document.getElementById("countryDropdown");
          //     countries.sort((a, b) => a.name.common.localeCompare(b.name.common));
  
          //     countries.forEach(country => {
          //         const option = document.createElement("option");
          //         option.value = country.cca2; 
          //         option.textContent = country.name.common;
          //         dropdown.appendChild(option);
          //     });
          // })
          // .catch(error => console.error("Error fetching country data:", error));

          document.addEventListener("DOMContentLoaded", function () {
            const apiUrl = "https://restcountries.com/v3.1/all";
          
            fetch(apiUrl)
              .then((response) => response.json())
              .then((data) => {
                const countrySelect = document.getElementById("country");
          
                data.forEach((country) => {
                  const root = country.idd?.root || "";
                  const suffix = country.idd?.suffixes?.[0] || ""; 
                  const countryCode = root + suffix;
          
                  if (countryCode) {
                    const option = document.createElement("option");
                    option.value = countryCode; 
                    option.textContent = country.name.common;
                    countrySelect.appendChild(option);
                  }
                });
              })
              .catch((error) => console.error("Error fetching country data:", error));
      
            document.getElementById("country").addEventListener("change", function () {
              const selectedCountryCode = this.value;
              const phoneInput = document.getElementById("phone_number");
          
              phoneInput.value = selectedCountryCode
                ? `${selectedCountryCode} ` 
                : "";
            });
          
           
            document.getElementById("downloadButton").addEventListener("click", function () {
              const fileUrl = "assets/testing-doc.docx"; 
              const a = document.createElement("a");
              a.href = fileUrl;
              a.download = "testing-doc.docx"; 
              document.body.appendChild(a);
              a.click(); 
              document.body.removeChild(a); 
            });
          });
          