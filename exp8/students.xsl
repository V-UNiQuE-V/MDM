<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
    <xsl:template match="/">
        <html>
            <head>
                <title>Student List</title>
                <style>
                    body { font-family: Arial, sans-serif; background: #f8fafc; color: #0f172a; }
                    h2 { text-align: center; }
                    table { border-collapse: collapse; width: 70%; margin: 0 auto; background: #ffffff; }
                    th, td { border: 1px solid #94a3b8; padding: 10px; text-align: center; }
                    th { background: #e2e8f0; }
                </style>
            </head>
            <body>
                <h2>Student List</h2>
                <table>
                    <tr>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Course</th>
                    </tr>
                    <xsl:for-each select="students/student">
                        <tr>
                            <td><xsl:value-of select="name"/></td>
                            <td><xsl:value-of select="age"/></td>
                            <td><xsl:value-of select="course"/></td>
                        </tr>
                    </xsl:for-each>
                </table>
            </body>
        </html>
    </xsl:template>
</xsl:stylesheet>