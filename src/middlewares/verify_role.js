import { notAuth } from "./handle_errors"

export const isAdmin = (req, res, next) => {
    const { role_admin } = req.user
    if (role_admin !== 'r1') return notAuth('Require role Admin', res)
    next()
}

export const isModeratorOrAdmin = (req, res, next) => {
    const { role_admin } = req.user
    if (role_admin !== 'r1' && role_admin !== 'r2') return notAuth('Require role Admin or Moderator', res)
    next()
}