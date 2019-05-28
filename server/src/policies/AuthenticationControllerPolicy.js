const Joi = require('joi')

module.exports = {
  register (req, res, next) {
    const pattern = '^[a-zA-Z0-9]{8,32}$'
    const schema = {
      email: Joi.string().email(),
      password: Joi.string().regex(
        new RegExp(pattern)
      )
    }

    const { error, value } = Joi.validate(req.body, schema)
    if (error) {
      switch (error.details[0].context.key) {
        case 'email':
          res.status(400).send({
            error: 'You must provide a valid email address.',
            value: value
          })
          break
        case 'password':
          res.status(400).send({
            error: `The password provided failed to match the following rules:
              <br>
              1. It must contain ONLY the following characters: lower case, upper case, or numeric.
              <br>
              2. It must be at least 8 characters in length and not greater than 32 characters in length.
            `,
            value: value
          })
          break
        default:
          res.status(400).send({
            error: 'Invalid registration information.',
            value: value
          })
      }
    } else {
      next()
    }
  }
}
