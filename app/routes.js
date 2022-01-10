const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line

router.post('/landing-choice-a', function (req, res) {

  var choice = req.session.data['dart-charge']

  if (choice == "one-off"){
    res.redirect('https://dart-charge-prototype.herokuapp.com/one-off-payment/v1.4a/pay-crossing')
  }

})

router.post('/landing-choice-b', function (req, res) {

  var choice = req.session.data['dart-charge']

  if (choice == "one-off"){
    res.redirect('https://dart-charge-prototype.herokuapp.com/one-off-payment/v1.4b/pay-crossing')
  }

})

module.exports = router
