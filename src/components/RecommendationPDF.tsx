import { Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  page: {
    flexDirection: 'column',
    backgroundColor: '#FFFFFF',
    padding: 50,
    fontFamily: 'Helvetica',
    color: '#111827',
  },
  headerContainer: {
    borderBottomWidth: 2,
    borderBottomColor: '#1D4ED8',
    paddingBottom: 15,
    marginBottom: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  schoolName: {
    fontSize: 24,
    fontFamily: 'Helvetica-Bold',
    color: '#1E3A8A',
    marginBottom: 4,
  },
  schoolContact: {
    fontSize: 10,
    color: '#4B5563',
    lineHeight: 1.4,
  },
  dateRefContainer: {
    marginBottom: 20,
  },
  standardText: {
    fontSize: 11,
    lineHeight: 1.6,
    color: '#1F2937',
    marginBottom: 12,
  },
  boldText: {
    fontFamily: 'Helvetica-Bold',
  },
  paragraph: {
    fontSize: 11,
    lineHeight: 1.6,
    color: '#374151',
    marginBottom: 16,
    textAlign: 'justify',
  },
  signatureContainer: {
    marginTop: 40,
  },
  signatureLine: {
    width: 150,
    height: 1,
    backgroundColor: '#111827',
    marginBottom: 8,
    marginTop: 30,
  },
  signatoryName: {
    fontSize: 12,
    fontFamily: 'Helvetica-Bold',
    color: '#111827',
    marginBottom: 2,
  },
  signatoryTitle: {
    fontSize: 10,
    color: '#4B5563',
    lineHeight: 1.4,
  }
});

const RecommendationPDF = () => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.headerContainer}>
        <View>
          <Text style={styles.schoolName}>PRIME LIFE COLLEGE</Text>
          <Text style={styles.schoolContact}>1/3 Prime Life Close, Laduba Junction</Text>
          <Text style={styles.schoolContact}>Ojo, Lagos, Nigeria</Text>
        </View>
        <View style={{ alignItems: 'flex-end' }}>
          <Text style={styles.schoolContact}>primelifeschool@yahoo.com</Text>
          <Text style={styles.schoolContact}>+234 803 488 5767</Text>
        </View>
      </View>

      <View style={styles.dateRefContainer}>
        <Text style={styles.standardText}>Date: June 24, 2026</Text>
        <Text style={styles.standardText}>
          <Text style={styles.boldText}>To:</Text> The Selection Committee, EducationUSA Nigeria Opportunity Funds Program (OFP)
        </Text>
        <Text style={styles.standardText}>
          <Text style={styles.boldText}>Re:</Text> Recommendation for Agha Chibuike Emmanuel
        </Text>
      </View>

      <Text style={styles.standardText}>Dear Members of the Selection Committee,</Text>

      <Text style={styles.paragraph}>
        It is with immense pride and absolute confidence that I recommend Agha Chibuike Emmanuel for the 2026 EducationUSA Opportunity Funds Program. As a Counsellor at Prime Life College, I have had the distinct privilege of watching Emmanuel grow from an inquisitive student into an extraordinary young innovator between 2015 and his graduation in 2021. He is, without a doubt, one of the most academically gifted, resilient, and forward-thinking students to have ever walked our halls.
      </Text>

      <Text style={styles.paragraph}>
        Academically, Emmanuel operates at a level of excellence that is rare. He graduated with a remarkable 92% cumulative GPA in his final year, consistently earning top marks across all core STEM subjects. His WASSCE results—highlighted by exceptional A1 grades in Mathematics and Physics—reflect his deep analytical capabilities. However, what makes Emmanuel truly stand out is not just his ability to absorb information, but his drive to apply it. Long before he was selected for the prestigious Federal Government 3MTT Cybersecurity Fellowship or founded his tech startup, Aethel Cyberworks, he was already demonstrating an intense passion for the intersection of computer science and biology. His goal of studying bioengineering and nanotechnology in the United States is a natural evolution of his lifelong dedication to the sciences.
      </Text>

      <Text style={styles.paragraph}>
        Beyond the classroom, Emmanuel is a natural leader and a multifaceted talent. He was an invaluable asset to our varsity basketball team and a standout competitor in track and field, specifically the long and high jumps. He possesses a unique creative flair, producing science-themed music to make complex STEM concepts more accessible to his peers. Through his educational consulting initiative, Apex Laurel, he continues to demonstrate a profound commitment to uplifting others, developing gamified learning frameworks to help fellow Nigerian students excel.
      </Text>

      <Text style={styles.paragraph}>
        Equally important to his academic and extracurricular achievements is his remarkable character. Raised by a single mother, Emmanuel has faced significant financial barriers that would have deterred a less determined individual. Yet, he has navigated these challenges with unwavering integrity, maturity, and a relentless work ethic. He understands the value of an education because he has had to fight for his.
      </Text>

      <Text style={styles.paragraph}>
        Emmanuel is precisely the type of globally competitive, compliant, and highly motivated talent that the Opportunity Funds Program seeks to support. Investing in his application process will yield a brilliant bioengineer who is deeply committed to giving back to both the United States and Nigeria. I endorse him completely and without reservation.
      </Text>

      <Text style={styles.standardText}>Should you require any further information, please do not hesitate to contact me.</Text>

      <View style={styles.signatureContainer}>
        <Text style={styles.standardText}>Sincerely,</Text>
        <View style={styles.signatureLine}></View>
        <Text style={styles.signatoryName}>Mrs. Ruth Adeleye</Text>
        <Text style={styles.signatoryTitle}>High School Counsellor / Principal</Text>
        <Text style={styles.signatoryTitle}>Prime Life College</Text>
        <Text style={styles.signatoryTitle}>Lagos, Nigeria</Text>
      </View>
    </Page>
  </Document>
);

export default RecommendationPDF;
