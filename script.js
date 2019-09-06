function displayResults(responseJson) {
    console.log(responseJson);
    $('#results-list').empty();
  
  
    for (let i = 0; i < responseJson.length; i++) {
      $('#results-list').append(
        `<li>
        <p>Repo: ${responseJson[i].name}</p>
        <p><a href='${responseJson[i].html_url}'>${responseJson[i].html_url}</a></p>
         </li>`
      )};
      $('#results').removeClass('hidden');
      
  }
  
  function getUser(username) { 
  
    const searchURL = `https://api.github.com/users/${username}/repos`
    console.log(searchURL);
  
    fetch(searchURL)
  
    .then(response => 
     { if (response.ok) 
      {return response.json();}
      
       throw new Error(response.statusText);
      })
      .then(responseJson => displayResults(responseJson))
      .catch(err => {
        $('#js-error-message').text(`Something went wrong :(`);
      });
     
  }
  
  function formSubmit() {
    $('form').submit(event => {
      event.preventDefault();
      const handle = $('#js-search-handle').val();
      getUser(handle);
    });
  }
  
  $(formSubmit);