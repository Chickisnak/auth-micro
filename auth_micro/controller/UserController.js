import prisma from "../config/db.config.js"

class UserController {
  static async getUser(req, res) {
    const { id } = req.params
    const user = await prisma.user.findUnique({
      where: {
        id: id
      },
      select: {
        id: true,
        name: true,
        email: true
      }
    })
    return res.json({ user: user })
  }

  static async getUsers(req, res) {
    try {
      const { userIDs } = req.body
      const users = await prisma.user.findMany({
        where: {
          id: {
            in: userIDs,
          }
        },
        select: {
          id: true,
          name: true,
          email: true
        }
      })
      return res.json({ users: users })
    } catch (error) {
      return res.status(500).json({
        message: 'Something went wrong.Please try again later'
      })
    }
  }

}

export default UserController