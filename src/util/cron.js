import cron from 'node-cron'

const members = [
  { name: 'Mospi', status: 'active', membershipExpiresOn: '2026-11-15' },
  { name: 'Tete', status: 'active', membershipExpiresOn: '2026-11-20' },
  { name: 'Perro', status: 'inactive', membershipExpiresOn: '2026-11-10' },
]

export function cronLog() {
  cron.schedule('* * * * *', () => {
    const date = new Date().toLocaleString('es-ES')
    console.log(`TETEEEEEEEEEEEE ${date}`)
  })
}

export function checkMembers() {
  cron.schedule('* * * * *', () => {
    members.forEach((member) => {
      const today = new Date()
      const daysTilExpires = new Date(member.membershipExpiresOn) - today
      console.log(
        `Name: ${member.name} Membership expiring in: ${daysTilExpires}`,
      )
    })
  })
}
