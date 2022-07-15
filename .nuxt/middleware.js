const middleware = {}

middleware['authenticated'] = require('../middleware/authenticated.js')
middleware['authenticated'] = middleware['authenticated'].default || middleware['authenticated']

middleware['checkTicket'] = require('../middleware/checkTicket.js')
middleware['checkTicket'] = middleware['checkTicket'].default || middleware['checkTicket']

export default middleware
