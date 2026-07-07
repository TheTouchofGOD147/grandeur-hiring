import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const form = await req.formData();

    // Honeypot anti-spam
    if (form.get("website")) {
      return Response.json({ ok: true });
    }

    const name = String(form.get("name") || "");
    const email = String(form.get("email") || "");
    const phone = String(form.get("phone") || "");
    const location = String(form.get("location") || "");
    const position = String(form.get("position") || "");
    const experience = String(form.get("experience") || "");
    const resume = form.get("resume");

    if (!name || !email || !phone || !position) {
      return Response.json(
        { ok: false, error: "Missing required fields" },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: "mail.privateemail.com",
      port: 587,
      secure: false,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    let attachment = null;

    if (resume instanceof File && resume.size > 0) {
      const buffer = Buffer.from(await resume.arrayBuffer());

      attachment = {
        filename: resume.name,
        content: buffer,
      };
    }

    const safeExperience = experience.replace(/\n/g, "<br />");

    await transporter.sendMail({
      from: process.env.EMAIL_FROM,
      to: process.env.HR_EMAIL,
      replyTo: email,
      subject: `New Job Application – ${position}`,
      text: `
New Job Application

Name: ${name}
Email: ${email}
Phone: ${phone}
Location: ${location}
Position: ${position}

Experience:
${experience}
      `,
      html: `
        <div style="font-family:Arial,sans-serif;background:#f5f3ef;padding:24px;color:#111;">
          <div style="max-width:640px;margin:0 auto;background:#ffffff;border-radius:14px;overflow:hidden;border:1px solid #e5dfd4;">
            <div style="background:#111827;color:#ffffff;padding:20px;">
              <h2 style="margin:0;font-size:22px;">New Job Application</h2>
              <p style="margin:6px 0 0;color:#d1d5db;">Grandeur Properties Careers</p>
            </div>

            <div style="padding:22px;">
              <p><strong>Name:</strong> ${name}</p>
              <p><strong>Email:</strong> ${email}</p>
              <p><strong>Phone:</strong> ${phone}</p>
              <p><strong>Location:</strong> ${location}</p>
              <p><strong>Position:</strong> ${position}</p>

              <hr style="border:none;border-top:1px solid #e5e7eb;margin:20px 0;" />

              <h3 style="color:#111827;margin-bottom:8px;">Experience / Skills</h3>
              <p style="line-height:1.6;">${safeExperience}</p>

              <p style="margin-top:20px;font-size:13px;color:#555;">
                Resume attachment included if the applicant uploaded one.
              </p>
            </div>
          </div>
        </div>
      `,
      attachments: attachment ? [attachment] : [],
    });

    await transporter.sendMail({
      from: process.env.EMAIL_FROM,
      to: email,
      subject: "Application Received – Grandeur Properties",
      text: `
Hello ${name},

We have received your application for the ${position} role.

Our hiring team will review your information and contact you if selected.

Thank you,
Grandeur Properties Hiring Team
      `,
      html: `
        <div style="font-family:Arial,sans-serif;background:#f5f3ef;padding:24px;color:#111;">
          <div style="max-width:640px;margin:0 auto;background:#ffffff;border-radius:14px;overflow:hidden;border:1px solid #e5dfd4;">
            <div style="background:#111827;color:#ffffff;padding:20px;">
              <h2 style="margin:0;font-size:22px;">Application Received</h2>
              <p style="margin:6px 0 0;color:#d1d5db;">Grandeur Properties Hiring Team</p>
            </div>

            <div style="padding:22px;">
              <p>Hello <strong>${name}</strong>,</p>

              <p style="line-height:1.6;">
                We have received your application for the
                <strong>${position}</strong> role.
              </p>

              <p style="line-height:1.6;">
                Our hiring team will review your information and contact you if selected.
              </p>

              <p style="margin-top:22px;">
                Thank you,<br />
                <strong>Grandeur Properties Hiring Team</strong>
              </p>
            </div>
          </div>
        </div>
      `,
    });

    return Response.json({ ok: true });
  } catch (err) {
    console.error(err);
    return Response.json({ ok: false }, { status: 500 });
  }
}