import nodemailer from 'nodemailer'

export const runtime = 'nodejs'

const parseEnv = () => {
  const host = process.env.SMTP_HOST || ''
  const port = Number(process.env.SMTP_PORT || 587)
  const user = process.env.SMTP_USER || ''
  const pass = process.env.SMTP_PASS || ''
  const to = process.env.MAIL_TO || user
  const from = process.env.MAIL_FROM || user

  return { host, port, user, pass, to, from }
}

export async function POST(request: Request) {
  try {
    const formData = await request.formData()

    const firstName = String(formData.get('firstName') || '').trim()
    const lastName = String(formData.get('lastName') || '').trim()
    const email = String(formData.get('email') || '').trim()
    const role = String(formData.get('role') || '').trim()
    const portfolio = String(formData.get('portfolio') || '').trim()
    const message = String(formData.get('message') || '').trim()
    const consent = String(formData.get('consent') || '').trim()

    if (!firstName || !lastName || !email || !consent) {
      return Response.json({ ok: false, error: 'Missing required fields.' }, { status: 400 })
    }

    const { host, port, user, pass, to, from } = parseEnv()

    if (!host || !user || !pass || !to || !from) {
      return Response.json({ ok: false, error: 'Email service is not configured.' }, { status: 500 })
    }

    const transporter = nodemailer.createTransport({
      host,
      port,
      secure: port === 465,
      auth: { user, pass },
    })

    const resume = formData.get('resume')
    const attachments: Array<{ filename: string; content: Buffer; contentType?: string }> = []

    if (resume instanceof File && resume.size > 0) {
      const buffer = Buffer.from(await resume.arrayBuffer())
      attachments.push({
        filename: resume.name || 'resume',
        content: buffer,
        contentType: resume.type || undefined,
      })
    }

    const subject = `Career application: ${firstName} ${lastName}`
    const body = [
      `Name: ${firstName} ${lastName}`,
      `Email: ${email}`,
      `Role: ${role || 'Not specified'}`,
      `Portfolio: ${portfolio || 'Not provided'}`,
      `Message:`,
      message || 'No message provided.',
    ].join('\n')

    await transporter.sendMail({
      from,
      to,
      replyTo: email,
      subject,
      text: body,
      attachments,
    })

    return Response.json({ ok: true })
  } catch (error) {
    console.error('Career form error:', error)
    return Response.json({ ok: false, error: 'Failed to send application.' }, { status: 500 })
  }
}
