import { ReactNode } from "react";

export interface LegalContent {
    title: string;
    content: ReactNode;
}

export const legalContentMap: Record<string, LegalContent> = {
    impressum: {
        title: "Impressum",
        content: (
            <div className="space-y-6 text-charcoal/80">
                <p>
                    <strong>Martina Muth</strong><br />
                    Leo-Leistikow-Allee 4<br />
                    22081 Hamburg
                </p>
                <p>
                    <a href="tel:+4917616442275" className="hover:text-primary transition-colors">+49 (0) 176 16442275</a><br />
                    <a href="mailto:info@martinamuth.de" className="hover:text-primary transition-colors">info@martinamuth.de</a>
                </p>
                <p>
                    <a href="https://www.martinamuth.de" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">www.martinamuth.de</a>
                </p>
            </div>
        )
    },
    datenschutz: {
        title: "Datenschutz / AGB",
        content: (
            <div className="space-y-8 text-charcoal/80 leading-relaxed max-w-3xl">
                <div>
                    <h4 className="text-xl font-bold mb-4">Einleitung</h4>
                    <p className="mb-4">
                        Wir („wir“, „uns“, „unser/e“) nehmen den Schutz der Daten der Nutzer („Nutzer“ oder „Sie“) unserer Website und/oder unseres Mobile-App (die „Website“ bzw. der „Mobile-App“) sehr ernst und verpflichten uns, die Informationen, die Nutzer uns in Verbindung mit der Nutzung unserer Website und/oder unseres Mobile-App (zusammen: „digitale Assets“) zur Verfügung stellen, zu schützen. Des Weiteren verpflichten wir uns, Ihre Daten gemäß anwendbarem Recht zu schützen und zu verwenden.
                    </p>
                    <p className="mb-4">
                        Diese Datenschutzrichtlinie erläutert unsere Praktiken in Bezug auf die Erfassung, Verwendung und Offenlegung Ihrer Daten durch die Nutzung unserer digitalen Assets (die „Dienste“), wenn Sie über Ihre Geräte auf die Dienste zugreifen.
                    </p>
                    <p>
                        Lesen Sie die Datenschutzrichtlinie bitte sorgfältig durch und stellen Sie sicher, dass Sie unsere Praktiken in Bezug auf Ihre Daten vollumfänglich verstehen, bevor Sie unsere Dienste verwenden. Wenn Sie diese Richtlinie gelesen, vollumfänglich verstanden haben und nicht mit unserer Vorgehensweise einverstanden sind, müssen Sie die Nutzung unserer digitalen Assets und Dienste einstellen. Mit der Nutzung unserer Dienste erkennen Sie die Bedingungen dieser Datenschutzrichtlinie an. Die weitere Nutzung der Dienste stellt Ihre Zustimmung zu dieser Datenschutzrichtlinie und allen Änderungen daran dar.
                    </p>
                </div>

                <div>
                    <h4 className="text-xl font-bold mb-4">Welche Daten erfassen wir?</h4>
                    <p className="mb-4">
                        Nicht identifizierte und nicht identifizierbare Informationen, die Sie während des Registrierungsprozesses bereitstellen oder die über die Nutzung unserer Dienste gesammelt werden („nicht personenbezogene Daten“). Nicht personenbezogene Daten lassen keine Rückschlüsse darauf zu, von wem sie erfasst wurden. Nicht personenbezogene Daten, die wir erfassen, bestehen hauptsächlich aus technischen und zusammengefassten Nutzungsinformationen.
                    </p>
                    <p>
                        Individuell identifizierbare Informationen, d. h. all jene, über die man Sie identifizieren kann oder mit vertretbarem Aufwand identifizieren könnte („personenbezogene Daten“). Zu den personenbezogenen Daten, die wir über unsere Dienste erfassen, können Informationen gehören, die von Zeit zu Zeit angefordert werden, wie Namen, E-Mail-Adressen, Adressen, Telefonnummern, IP-Adressen und mehr. Wenn wir personenbezogene mit nicht personenbezogenen Daten kombinieren, werden diese, solange sie in Kombination vorliegen, von uns als personenbezogene Daten behandelt.
                    </p>
                </div>

                <div>
                    <h4 className="text-xl font-bold mb-4">Warum erfassen wir diese Daten?</h4>
                    <ul className="list-disc pl-6 space-y-2">
                        <li>um unsere Dienste zur Verfügung zu stellen und zu betreiben;</li>
                        <li>um unsere Dienste zu entwickeln, anzupassen und zu verbessern;</li>
                        <li>um auf Ihr Feedback, Ihre Anfragen und Wünsche zu reagieren und Hilfe anzubieten;</li>
                        <li>um Anforderungs- und Nutzungsmuster zu analysieren;</li>
                        <li>für sonstige interne, statistische und Recherchezwecke;</li>
                        <li>um unsere Möglichkeiten zur Datensicherheit und Betrugsprävention verbessern zu können;</li>
                        <li>um Verstöße zu untersuchen und unsere Bedingungen und Richtlinien durchzusetzen sowie um dem anwendbaren Recht, den Vorschriften bzw. behördlichen Anordnungen zu entsprechen;</li>
                        <li>um Ihnen Aktualisierungen, Nachrichten, Werbematerial und sonstige Informationen im Zusammenhang mit unseren Diensten zu übermitteln.</li>
                    </ul>
                </div>

                <div>
                    <h4 className="text-xl font-bold mb-4">An wen geben wir diese Daten weiter?</h4>
                    <p className="mb-4">
                        Wir können Ihre Daten an unsere Dienstleister weitergeben, um unsere Dienste zu betreiben (z. B. Speicherung von Daten über Hosting-Dienste Dritter, Bereitstellung technischer Unterstützung usw.).
                    </p>
                    <p className="mb-4">
                        Wir können Ihre Daten auch unter folgenden Umständen offenlegen: (i) um rechtswidrige Aktivitäten oder sonstiges Fehlverhalten zu untersuchen, aufzudecken, zu verhindern oder dagegen vorzugehen; (ii) um unsere Rechte auf Verteidigung zu begründen oder auszuüben; (iii) um unsere Rechte, unser Eigentum oder unsere persönliche Sicherheit sowie die Sicherheit unserer Nutzer oder der Öffentlichkeit zu schützen; (iv) im Falle eines Kontrollwechsels bei uns oder bei einem unserer verbundenen Unternehmen (im Wege einer Verschmelzung, des Erwerbs oder Kaufs (im Wesentlichen) aller Vermögenswerte u. a.); (v) um Ihre Daten mittels befugter Drittanbieter zu erfassen, vorzuhalten und/oder zu verwalten (z. B. Cloud-Service-Anbieter), soweit dies für geschäftliche Zwecke angemessen ist; (vi) um mit Drittanbietern gemeinsam an der Verbesserung Ihres Nutzererlebnisses zu arbeiten.
                    </p>
                </div>

                <div>
                    <h4 className="text-xl font-bold mb-4">Cookies und ähnliche Technologien</h4>
                    <p>
                        Wenn Sie unsere Dienste besuchen oder darauf zugreifen, autorisieren wir Dritte dazu, Webbeacons, Cookies, Pixel Tags, Skripte sowie andere Technologien und Analysedienste („Tracking-Technologien“) einzusetzen. Diese Tracking-Technologien können es Dritten ermöglichen, Ihre Daten automatisch zu erfassen, um das Navigationserlebnis auf unseren digitalen Assets zu verbessern, deren Performance zu optimieren und ein maßgeschneidertes Nutzererlebnis zu gewährleisten, sowie zu Zwecken der Sicherheit und der Betrugsprävention.
                    </p>
                </div>

                <div>
                    <h4 className="text-xl font-bold mb-4">Wo speichern wir die Daten?</h4>
                    <p>
                        Bitte beachten Sie, dass unsere Unternehmen sowie unsere vertrauenswürdigen Partner und Dienstanbieter auf der ganzen Welt ansässig sind. Zu den in dieser Datenschutzrichtlinie erläuterten Zwecken speichern und verarbeiten wir alle nicht personenbezogenen Daten, die wir erfassen, in unterschiedlichen Rechtsordnungen. Personenbezogene Daten können in den Vereinigten Staaten, in Irland, Südkorea, Taiwan, Israel und soweit für die ordnungsgemäße Bereitstellung unserer Dienste und/oder gesetzlich vorgeschrieben in anderen Rechtsordnungen gepflegt, verarbeitet und gespeichert werden.
                    </p>
                </div>

                <div>
                    <h4 className="text-xl font-bold mb-4">Wie lange werden die Daten vorgehalten?</h4>
                    <p>
                        Bitte beachten Sie, dass wir die erfassten Daten so lange aufbewahren, wie es für die Bereitstellung unserer Dienste, zur Einhaltung unserer gesetzlichen und vertraglichen Verpflichtungen gegenüber Ihnen, zur Beilegung von Streitigkeiten und zur Durchsetzung unserer Vereinbarungen erforderlich ist. Wir können unrichtige oder unvollständige Daten jederzeit nach eigenem Ermessen berichtigen, ergänzen oder löschen.
                    </p>
                </div>

                <div>
                    <h4 className="text-xl font-bold mb-4">Wie schützen wir die Daten?</h4>
                    <p>
                        Der Hosting-Dienst stellt uns die Online-Plattform zu Verfügung, über die wir Ihnen unsere Dienste anbieten können. Er speichert Ihre Daten auf sicheren Servern hinter einer Firewall und bietet sicheren HTTPS-Zugriff. Ungeachtet der ergriffenen Maßnahmen können und werden wir keinen absoluten Schutz garantieren. Wir bitten Sie, sichere Passwörter festzulegen und uns keine vertraulichen Informationen zu übermitteln.
                    </p>
                </div>

                <div>
                    <h4 className="text-xl font-bold mb-4">Wie gehen wir mit Minderjährigen um?</h4>
                    <p>
                        Die Dienste sind nicht für Nutzer bestimmt, die noch nicht die gesetzliche Volljährigkeit erreicht haben. Wir werden wissentlich keine Daten von Kindern erfassen. Wenn Sie noch nicht volljährig sind, sollten Sie die Dienste nicht herunterladen oder nutzen und uns keine Informationen zur Verfügung stellen.
                    </p>
                </div>

                <div>
                    <h4 className="text-xl font-bold mb-4">Rechte (EU/EWR)</h4>
                    <p>
                        Wir verwenden Ihre personenbezogenen Daten nur für die in der Datenschutzrichtlinie festgelegten Zwecke. Als EU-Ansässiger können Sie: eine Bestätigung darüber verlangen, den Erhalt von personenbezogenen Daten anfordern, die Berichtigung verlangen, die Löschung verlangen, der Verarbeitung widersprechen oder eine Beschwerde einreichen.
                    </p>
                </div>

                <div>
                    <h4 className="text-xl font-bold mb-4">Kontakt</h4>
                    <p>
                        Name: Martina Muth<br />
                        Anschrift: Leo-Leistikow-Allee 4, 22081 Hamburg<br />
                        E-Mail: info@martinamuth.de
                    </p>
                </div>
            </div>
        )
    }
};

legalContentMap.agb = legalContentMap.datenschutz;
