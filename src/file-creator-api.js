const URI = 'https://shrouded-tor-67274.herokuapp.com/download';

module.exports = (name, content) =>
  fetch(URI, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name, content })
  })
    .then(res => res.json())
    .then(({ _id, timer }) => ({
      success: true,
      url: URI + '/' + _id,
      timer
    }))
    .catch(err => { success: false })
