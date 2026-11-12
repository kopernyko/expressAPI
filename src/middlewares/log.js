export function log(req, res, next) {
  const date = new Date().toLocaleString('es-ES')
  const start = Date.now()

  res.on('finish', () => {
    const execTime = Date.now() - start
    console.log(
      `[${req.method}] Request at [${date}] - Endpoint: [${req.originalUrl}] - Status Code: ${res.statusCode} - Execution Time: ${execTime}ms`,
    )
  })

  next()
}
