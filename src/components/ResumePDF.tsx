import { Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  page: {
    flexDirection: 'column',
    backgroundColor: '#FFFFFF',
    padding: 40,
    fontFamily: 'Helvetica',
    color: '#111827',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    borderBottomWidth: 1,
    borderBottomColor: '#E5E7EB',
    paddingBottom: 20,
    marginBottom: 20,
  },
  headerLeft: {
    flexDirection: 'column',
    flex: 1,
    marginRight: 20,
  },
  headerRight: {
    flexDirection: 'column',
    alignItems: 'flex-end',
    flexShrink: 0,
  },
  name: {
    fontSize: 28,
    fontFamily: 'Helvetica-Bold',
    color: '#111827',
    marginBottom: 4,
    letterSpacing: -0.5,
  },
  nameAccent: {
    color: '#2563EB',
  },
  subtitle: {
    fontSize: 11,
    color: '#4B5563',
    textTransform: 'uppercase',
    letterSpacing: 1.5,
    fontFamily: 'Helvetica-Bold',
  },
  contactInfo: {
    fontSize: 9,
    color: '#6B7280',
    marginBottom: 4,
    textAlign: 'right',
  },
  gridContainer: {
    flexDirection: 'row',
    flexGrow: 1,
  },
  leftColumn: {
    width: '35%',
    paddingRight: 20,
  },
  rightColumn: {
    width: '65%',
    paddingLeft: 20,
  },
  section: {
    marginBottom: 20,
  },
  sectionTitleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  sectionTitle: {
    fontSize: 10,
    fontFamily: 'Helvetica-Bold',
    color: '#2563EB',
    textTransform: 'uppercase',
    letterSpacing: 1.5,
  },
  sectionTitleLine: {
    flexGrow: 1,
    height: 1,
    backgroundColor: '#E5E7EB',
    marginLeft: 8,
  },
  text: {
    fontSize: 9,
    lineHeight: 1.6,
    color: '#374151',
  },
  bold: {
    fontFamily: 'Helvetica-Bold',
    color: '#111827',
  },
  jobContainer: {
    marginBottom: 12,
    paddingLeft: 10,
    borderLeftWidth: 2,
    borderLeftColor: '#E5E7EB',
  },
  jobDotContainer: {
    position: 'absolute',
    left: -10,
    top: 0,
    height: '100%',
  },
  jobDot: {
    width: 6,
    height: 6,
    backgroundColor: '#2563EB',
    marginTop: 4,
  },
  jobHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 4,
  },
  jobTitleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
    flex: 1,
    paddingRight: 10,
  },
  jobTitle: {
    fontSize: 11,
    fontFamily: 'Helvetica-Bold',
    color: '#111827',
  },
  company: {
    fontSize: 9,
    fontFamily: 'Helvetica-Oblique',
    color: '#4B5563',
    marginLeft: 4,
  },
  jobDate: {
    fontSize: 8,
    color: '#2563EB',
    fontFamily: 'Helvetica-Bold',
  },
  bulletItem: {
    flexDirection: 'row',
    marginBottom: 4,
  },
  bullet: {
    width: 10,
    fontSize: 9,
    color: '#2563EB',
  },
  bulletText: {
    flex: 1,
    fontSize: 9,
    lineHeight: 1.6,
    color: '#374151',
  },
  skillsBox: {
    backgroundColor: '#F9FAFB',
    padding: 10,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: '#E5E7EB',
    marginBottom: 20,
  },
  badgeContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 4,
  },
  badge: {
    backgroundColor: '#FFFFFF',
    paddingVertical: 2,
    paddingHorizontal: 4,
    borderRadius: 2,
    borderWidth: 1,
    borderColor: '#E5E7EB',
    marginBottom: 4,
    marginRight: 4,
  },
  badgeText: {
    color: '#2563EB',
    fontSize: 7,
    fontFamily: 'Helvetica-Bold',
  },
  extraCurricularBox: {
    backgroundColor: '#F9FAFB',
    padding: 10,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: '#E5E7EB',
    marginBottom: 10,
  },
  extraCurricularTitle: {
    fontSize: 9,
    fontFamily: 'Helvetica-Bold',
    color: '#111827',
    textTransform: 'uppercase',
    marginBottom: 4,
  },
  footer: {
    marginTop: 'auto',
    paddingTop: 10,
    borderTopWidth: 1,
    borderTopColor: '#E5E7EB',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  footerText: {
    fontSize: 8,
    color: '#9CA3AF',
  },
  footerLine: {
    width: 100,
    height: 4,
    backgroundColor: '#2563EB',
    opacity: 0.2,
    borderRadius: 2,
  }
});

const ResumePDF = () => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <Text style={styles.name}>AGHA CHIBIKE <Text style={styles.nameAccent}>EMMANUEL</Text></Text>
          <Text style={styles.subtitle}>Systems Architect & Technology Developer</Text>
        </View>
        <View style={styles.headerRight}>
          <Text style={styles.contactInfo}>57 Zone D Phase 5, Lokogoma, Abuja, Nigeria</Text>
          <Text style={styles.contactInfo}>+234 912 569 9439 • jovialdavidmike@gmail.com</Text>
          <Text style={styles.contactInfo}>LinkedIn: @jovialmike • GitHub: @jovialmike</Text>
        </View>
      </View>

      <View style={styles.gridContainer}>
        {/* LEFT COLUMN */}
        <View style={styles.leftColumn}>
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Professional Summary</Text>
            <Text style={styles.text}>
              Innovative systems architect and developer bridging computer science, cybersecurity, and human biology. Focused on advancing computational biology, bioengineering, and nanotechnology. Entrepreneurial leader with a proven track record in engineering AI automation platforms, secure digital infrastructure, and full-stack solutions. Seeking to leverage technical acumen in the EducationUSA OFP to drive research in next-generation biological and cyber systems.
            </Text>
          </View>

          <View style={styles.skillsBox}>
            <Text style={{ ...styles.sectionTitle, marginBottom: 8 }}>Core Expertise</Text>
            <View style={styles.badgeContainer}>
              <View style={styles.badge}><Text style={styles.badgeText}>FULL-STACK WEB</Text></View>
              <View style={styles.badge}><Text style={styles.badgeText}>PYTHON SCRIPTING</Text></View>
              <View style={styles.badge}><Text style={styles.badgeText}>CYBERSECURITY</Text></View>
              <View style={styles.badge}><Text style={styles.badgeText}>LINUX & TERMUX</Text></View>
              <View style={styles.badge}><Text style={styles.badgeText}>BRUTE-FORCE TESTING</Text></View>
              <View style={styles.badge}><Text style={styles.badgeText}>AI AUTOMATION</Text></View>
              <View style={styles.badge}><Text style={styles.badgeText}>COMPUTATIONAL BIOLOGY</Text></View>
            </View>
          </View>

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Education</Text>
            <View style={{ marginBottom: 12 }}>
              <Text style={{ fontSize: 10, fontFamily: 'Helvetica-Bold', color: '#111827' }}>Prime Life College</Text>
              <Text style={{ fontSize: 9, color: '#4B5563', marginTop: 2 }}>High School Diploma (2021) • GPA: 92%</Text>
              <Text style={{ fontSize: 8, color: '#6B7280', marginTop: 2 }}>A1 in Math & Physics | Science Awards</Text>
            </View>
          </View>

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Certifications</Text>
            <View style={{ marginBottom: 8 }}>
              <Text style={{ fontSize: 9, fontFamily: 'Helvetica-Bold', color: '#111827' }}>Harvard Online</Text>
              <Text style={{ fontSize: 9, color: '#4B5563' }}>Cybersecurity Class (2024)</Text>
            </View>
            <View>
              <Text style={{ fontSize: 9, fontFamily: 'Helvetica-Bold', color: '#111827' }}>Google</Text>
              <Text style={{ fontSize: 9, color: '#4B5563' }}>AI-Powered Shopping Ads Certification</Text>
            </View>
          </View>
          
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Key Interests</Text>
            <Text style={styles.text}>
              Nanotechnology, AI-Driven Diagnostics, Gamified Education frameworks.
            </Text>
          </View>
        </View>

        {/* RIGHT COLUMN */}
        <View style={styles.rightColumn}>
          <View style={styles.section}>
            <View style={styles.sectionTitleContainer}>
              <Text style={styles.sectionTitle}>Professional Experience</Text>
              <View style={styles.sectionTitleLine}></View>
            </View>

            <View style={styles.jobContainer}>
              <View style={styles.jobDotContainer}><View style={styles.jobDot}></View></View>
              <View style={styles.jobHeader}>
                <View style={styles.jobTitleRow}>
                  <Text style={styles.jobTitle}>Aethel Cyberworks</Text>
                  <Text style={styles.company}>| Founder & Lead Architect</Text>
                </View>
                <Text style={styles.jobDate}>2022 – PRES</Text>
              </View>
              <View style={styles.bulletItem}>
                <Text style={styles.bullet}>•</Text>
                <Text style={styles.bulletText}>Established a technology startup focused on full-stack web development, AI automation, and digital strategy.</Text>
              </View>
              <View style={styles.bulletItem}>
                <Text style={styles.bullet}>•</Text>
                <Text style={styles.bulletText}>Designed architectures leveraging large language models (LLMs) to automate business efficiency and content creation.</Text>
              </View>
              <View style={styles.bulletItem}>
                <Text style={styles.bullet}>•</Text>
                <Text style={styles.bulletText}>Engineered data-scraping AI engines for real-time market strategy.</Text>
              </View>
            </View>

            <View style={styles.jobContainer}>
              <View style={styles.jobDotContainer}><View style={styles.jobDot}></View></View>
              <View style={styles.jobHeader}>
                <View style={styles.jobTitleRow}>
                  <Text style={styles.jobTitle}>3MTT Program</Text>
                  <Text style={styles.company}>| Cybersecurity Fellow</Text>
                </View>
                <Text style={styles.jobDate}>2026 – PRES</Text>
              </View>
              <View style={styles.bulletItem}>
                <Text style={styles.bullet}>•</Text>
                <Text style={styles.bulletText}>Selected for the highly competitive "3 Million Technical Talent" initiative under the Cybersecurity track.</Text>
              </View>
              <View style={styles.bulletItem}>
                <Text style={styles.bullet}>•</Text>
                <Text style={styles.bulletText}>Advanced training in critical infrastructure protection, threat mitigation, and secure systems management.</Text>
              </View>
            </View>

            <View style={styles.jobContainer}>
              <View style={styles.jobDotContainer}><View style={styles.jobDot}></View></View>
              <View style={styles.jobHeader}>
                <View style={styles.jobTitleRow}>
                  <Text style={styles.jobTitle}>Apex Laurel</Text>
                  <Text style={styles.company}>| Founder & Consultant</Text>
                </View>
                <Text style={styles.jobDate}>2025 – PRES</Text>
              </View>
              <View style={styles.bulletItem}>
                <Text style={styles.bullet}>•</Text>
                <Text style={styles.bulletText}>Launched an educational consulting firm dedicated to preparing high-achieving students for rigorous academic competitions.</Text>
              </View>
              <View style={styles.bulletItem}>
                <Text style={styles.bullet}>•</Text>
                <Text style={styles.bulletText}>Developed RPG-style study frameworks for STEM. Spearheaded business registration and academic proposals.</Text>
              </View>
            </View>

            <View style={styles.jobContainer}>
              <View style={styles.jobDotContainer}><View style={styles.jobDot}></View></View>
              <View style={styles.jobHeader}>
                <View style={styles.jobTitleRow}>
                  <Text style={styles.jobTitle}>Freelance Strategist</Text>
                  <Text style={styles.company}>| Full-Stack Dev</Text>
                </View>
                <Text style={styles.jobDate}>2025 – PRES</Text>
              </View>
              <View style={styles.bulletItem}>
                <Text style={styles.bullet}>•</Text>
                <Text style={styles.bulletText}>Built nkatanri.com; managed growth strategy for Wisdom Vision Autos; managed international trade documentation including Safety Data Sheets.</Text>
              </View>
            </View>
          </View>

          <View style={styles.section}>
            <View style={styles.sectionTitleContainer}>
              <Text style={styles.sectionTitle}>Extra-Curriculars</Text>
              <View style={styles.sectionTitleLine}></View>
            </View>
            
            <View style={styles.extraCurricularBox}>
              <Text style={styles.extraCurricularTitle}>Creative Media & Music Production</Text>
              <Text style={{ fontSize: 9, color: '#4B5563', lineHeight: 1.4 }}>
                Producer of STEM-themed tracks ("Electrolysis"). Combines audio engineering with digital educational outreach.
              </Text>
            </View>
            
            <View style={styles.extraCurricularBox}>
              <Text style={styles.extraCurricularTitle}>Community Support & Peer Counseling</Text>
              <Text style={{ fontSize: 9, color: '#4B5563', lineHeight: 1.4 }}>
                Dedicated peer counselor in online communities, providing empathetic, structured mental health support engagement.
              </Text>
            </View>

            <View style={styles.extraCurricularBox}>
              <Text style={styles.extraCurricularTitle}>Athletics</Text>
              <Text style={{ fontSize: 9, color: '#4B5563', lineHeight: 1.4 }}>
                Varsity Basketball & Track and Field (Long/High Jump).
              </Text>
            </View>

          </View>
        </View>
      </View>
      
      <View style={styles.footer}>
        <Text style={styles.footerText}>CV_EMMANUEL_2026_SYSTEMS_ARCHITECT</Text>
        <View style={styles.footerLine}></View>
      </View>
    </Page>
  </Document>
);

export default ResumePDF;
