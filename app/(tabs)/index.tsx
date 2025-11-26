import React, { useState } from 'react';
import { View, Text, FlatList, Image, TouchableOpacity, StyleSheet, TextInput, ScrollView } from 'react-native';
import { useRouter } from 'expo-router';

// newsData برای 20 خبر جدید
export const newsData = [
  // TECHNOLOGY
  {
    id: '1',
    title: 'Apple Unveils New AI Assistant',
    category: 'Technology',
    description: 'Apple today announced new Apple Intelligence features that elevate the user experience across iPhone, iPad, Mac, Apple Watch, and Apple Vision Pro. Apple Intelligence unlocks new ways for users to communicate with features like Live Translation; do more with what’s on their screen with updates to visual intelligence; and express themselves with enhancements to Image Playground and Genmoji.1 Additionally, Shortcuts can now tap into Apple Intelligence directly, and developers will be able to access the on-device large language model at the core of Apple Intelligence, giving them direct access to intelligence that is powerful, fast, built with privacy, and available even when users are offline. These Apple Intelligence features are available for testing starting today, and will be available to users with supported devices set to a supported language this fall. Last year, we took the first steps on a journey to bring users intelligence that’s helpful, relevant, easy to use, and right where users need it, all while protecting their privacy. Now, the models that power Apple Intelligence are becoming more capable and efficient, and we’re integrating features in even more places across each of our operating systems,” said Craig Federighi, Apple’s senior vice president of Software Engineering. “We’re also taking the huge step of giving developers direct access to the on-device foundation model powering Apple Intelligence, allowing them to tap into intelligence that is powerful, fast, built with privacy, and available even when users are offline. We think this will ignite a whole new wave of intelligent experiences in the apps users rely on every day. We can’t wait to see what developers create. Apple Intelligence features will be coming to eight more languages by the end of the year: Danish, Dutch, Norwegian, Portuguese (Portugal), Swedish, Turkish, Chinese (traditional), and Vietnamese.\n\n Live Translation Breaks Down Language Barriers: \n\n For those moments when a language barrier gets in the way, Live Translation can help users communicate across languages when messaging or speaking. The experience is integrated into Messages, FaceTime, and Phone, and enabled by Apple-built models that run entirely on device, so users’ personal conversations stay personal.In Messages, Live Translation can automatically translate messages. If a user is making plans with new friends while traveling abroad, their message can be translated as they type, delivered in the recipient’s preferred language, and when they get a response, each message can be instantly translated. On FaceTime calls, a user can follow along with translated live captions while still hearing the speaker’s voice. And when on a phone call, the translation is spoken aloud throughout the conversation. ',
    image: require('../../assets/tech1.png'),
  },
  {
    id: '2',
    title: 'Google Releases Quantum Computing Update',
    category: 'Technology',
    description: ' The new update introduces enhanced quantum error correction, a critical step toward achieving reliable and scalable quantum systems. Google has also optimized the software stack, allowing developers to access quantum processors more effectively through Cirq, Google’s open-source quantum programming framework. This update opens new doors for researchers and enterprises seeking to simulate complex molecular structures, model financial systems, and explore artificial intelligence algorithms that classical computers struggle to handle. Google’s team emphasizes the potential real-world applications of quantum computing. For example, breakthroughs in quantum chemistry could accelerate drug discovery, while improved optimization algorithms might enhance logistics, transportation, and supply chain management. The update also strengthens Google’s position in the global quantum race, which includes competitors like IBM, Microsoft, and several leading research institutions. While quantum computers are still in their infancy, Google’s updates are a step toward practical quantum advantage, where quantum processors can outperform classical machines in meaningful tasks. Developers and researchers are encouraged to experiment with new quantum circuits and hybrid classical-quantum algorithms, enabling innovation in both scientific and commercial applications.',
    image: require('../../assets/tech2.png'),
  },

  // SCIENCE
  {
    id: '3',
    title: 'NASA Discovers Ice Deposits on Mars',
    category: 'Science',
    description: 'NASA scientists have discovered previously unknown ice deposits beneath the Martian surface, providing new insights into the planet’s geological history and potential for sustaining human missions. Using data from orbiting satellites and ground-penetrating radar, researchers detected thick layers of ice hidden beneath the dusty Martian regolith. These findings suggest that water is more abundant on Mars than previously thought, opening possibilities for future human exploration and colonization. In addition to the scientific significance, the discovery has practical implications for future missions. Water is a critical resource for sustaining astronauts, and ice deposits could be used for drinking water, oxygen production, and even fuel generation through electrolysis. NASA plans to integrate these findings into mission planning for upcoming rovers and manned missions, possibly enabling more sustainable long-term exploration. The research team also noted that the ice is remarkably pure, reducing the energy required to extract usable water. This could drastically improve the feasibility of establishing semi-permanent bases on the Red Planet. Beyond human missions, the discovery may inform astrobiology studies, as pockets of ice could harbor microbial life or preserve biosignatures from Mars’ ancient past. By combining high-resolution satellite imagery with radar and spectroscopic analysis, NASA continues to uncover secrets of the Martian surface, bringing humanity closer to understanding the planet’s environment and preparing for future interplanetary exploration.',
    image: require('../../assets/sci1.png'),
  },
  {
    id: '4',
    title: 'Scientists Detect Fastest-Growing Black Hole',
    category: 'Science',
    description: 'Astronomers have identified a black hole exhibiting an unprecedented growth rate, capturing the attention of the scientific community worldwide. This black hole, located in a distant galaxy, is consuming surrounding matter at an extraordinary pace, providing a rare opportunity to study the dynamics of black hole accretion and the effects on its host galaxy. Observations suggest that the black hole’s mass is increasing several times faster than typical supermassive black holes observed in similar galaxies. Using a combination of X-ray telescopes, radio observatories, and space-based instruments, researchers tracked the emission of high-energy particles and radiation from the accretion disk surrounding the black hole. This process generates powerful jets of energy that influence star formation and the evolution of the galaxy. The rapid growth observed may be linked to an unusually dense environment of gas and dust, supplying ample material for the black hole to consume. The discovery challenges existing models of black hole evolution, as it demonstrates that under certain conditions, black holes can grow much faster than previously thought. Scientists are exploring whether this phenomenon is common in the early universe, potentially explaining the presence of massive black holes less than a billion years after the Big Bang. Understanding the behavior of this black hole can also shed light on gravitational waves, as rapidly growing black holes may merge more frequently, producing detectable ripples in spacetime. The research highlights the importance of continuous monitoring and advanced simulations to predict black hole activity and its impact on surrounding cosmic structures.',
    image: require('../../assets/sci2.png'),
  },
  {
    id: '5',
    title: 'New DNA-Based Medical Test Developed',
    category: 'Science',
    description: 'Researchers have developed an innovative DNA-based medical test capable of detecting diseases at early stages with high accuracy. The test uses advanced genomic sequencing techniques to identify mutations, biomarkers, and genetic patterns associated with specific health conditions. This breakthrough represents a major advancement in personalized medicine, allowing healthcare providers to tailor treatments to individual patients. The DNA-based test can screen for a range of diseases, including cancers, hereditary disorders, and infectious diseases. By analyzing small samples of blood, saliva, or tissue, the test detects genetic anomalies before clinical symptoms appear, improving the chances of early intervention and successful treatment. Scientists highlight that this method reduces reliance on invasive procedures and provides results faster than conventional diagnostic tests. In addition to early detection, the test can also track disease progression and predict patient responses to various therapies. Hospitals and research institutions are evaluating its integration into routine healthcare screenings, potentially revolutionizing preventative medicine. Researchers are optimistic that such DNA-based diagnostics will become widely accessible, reducing global health disparities and improving patient outcomes. The test’s accuracy and speed are achieved through machine learning algorithms that interpret complex genetic data and correlate it with known disease patterns. As research continues, scientists aim to expand the test’s capabilities to cover more conditions and refine its precision, ensuring that personalized, proactive healthcare becomes the new standard.',
    image: require('../../assets/sci3.png'),
  },

  // HEALTH
  {
    id: '6',
    title: 'WHO Warns About Seasonal Virus Spread',
    category: 'Health',
    description: 'The World Health Organization (WHO) has issued a warning about an increase in seasonal viral infections across multiple regions. As temperatures change and populations gather indoors, viruses such as influenza, RSV (Respiratory Syncytial Virus), and emerging respiratory pathogens are spreading more rapidly than expected. WHO emphasizes the importance of vaccination, hygiene, and timely healthcare interventions to prevent widespread outbreaks. Seasonal viruses can have a significant impact on public health systems, particularly when they overlap with other endemic illnesses. Healthcare professionals are advising vulnerable populations, including the elderly, children, and immunocompromised individuals, to receive annual flu vaccines and practice preventive measures. These measures include regular handwashing, wearing masks in crowded areas, and avoiding close contact with sick individuals. In addition to vaccination campaigns, WHO is monitoring viral mutations and the emergence of new strains that may increase transmission or severity. International collaboration between research institutions, governments, and healthcare providers ensures that data on infection rates, hospitalizations, and vaccine effectiveness is shared promptly. The warning highlights the need for ongoing public health preparedness, including adequate hospital capacity, stockpiles of antiviral medications, and public awareness campaigns. WHO also recommends that governments invest in healthcare infrastructure and support rapid testing and diagnostics to contain outbreaks efficiently. As global travel resumes and populations become more mobile, seasonal viruses may spread beyond traditional geographic boundaries, making coordinated international response crucial. Individuals are encouraged to stay informed about local health advisories and follow recommended protective measures to minimize risks.',
    image: require('../../assets/hea1.png'),
  },
  {
    id: '7',
    title: 'New Heart Disease Study Reveals Risk Factors',
    category: 'Health',
    description: 'A recent global study has uncovered new risk factors contributing to heart disease, one of the leading causes of death worldwide. Researchers analyzed health data from millions of participants over several decades, looking at lifestyle habits, genetics, and environmental influences. The study revealed that beyond traditional risk factors like high blood pressure, cholesterol, and smoking, other elements such as sleep quality, stress levels, air pollution, and even socioeconomic status play a critical role in heart health. The research emphasizes that irregular sleep patterns and chronic stress can lead to inflammation and hormonal imbalances that increase the risk of cardiovascular problems. Environmental factors, including exposure to fine particulate matter in polluted air, were also strongly correlated with higher rates of heart disease. Additionally, people living in lower-income areas often face barriers to healthy diets, regular exercise, and adequate healthcare, further exacerbating risk. Genetic predisposition remains a significant factor, but researchers highlight that lifestyle modifications can dramatically reduce overall risk, even for those with high genetic vulnerability. Preventative strategies include regular exercise, balanced nutrition, stress management techniques, and regular cardiovascular screenings. Public health campaigns are being updated to reflect these findings, encouraging a more holistic approach to heart health. Medical professionals are optimistic that integrating these insights into early diagnosis and treatment plans will lead to reduced incidence of heart attacks, strokes, and other cardiovascular events. The study also calls for international collaboration to address environmental and societal factors contributing to heart disease globally.',
    image: require('../../assets/hea2.png'),
  },
  {
    id: '8',
    title: 'A New Flu Vaccine Shows High Effectiveness',
    category: 'Health',
    description: 'A newly developed flu vaccine has demonstrated remarkable effectiveness against multiple strains of the influenza virus. The vaccine, created using advanced mRNA and recombinant technologies, provides stronger immune responses than previous formulations. Clinical trials across several countries have shown protection rates exceeding 80%, significantly reducing hospitalizations and severe illness among high-risk populations. The vaccine targets several key strains anticipated to circulate in the upcoming flu season, providing broad coverage and minimizing the risk of vaccine mismatch. In addition to traditional intramuscular injections, new delivery methods, such as nasal sprays and microneedle patches, are being explored to increase accessibility and compliance. Health organizations are recommending vaccination for everyone over six months of age, with special emphasis on the elderly, pregnant women, and people with chronic illnesses. The rollout strategy includes mass vaccination campaigns, partnerships with community health centers, and public awareness initiatives. Researchers emphasize that vaccination should be complemented with standard preventive measures, such as hand hygiene, mask usage in crowded spaces, and avoiding close contact with sick individuals. Continuous monitoring of circulating flu strains allows scientists to update the vaccine annually, maintaining high effectiveness. Public health officials are optimistic that the introduction of this vaccine will reduce the annual burden of influenza, saving thousands of lives and preventing economic losses due to illness-related absences.',
    image: require('../../assets/hea3.png'),
  },

  // ENVIRONMENT
  {
    id: '9',
    title: 'Global Carbon Emissions Increase in 2025',
    category: 'Environment',
    description: 'Recent climate reports indicate that global carbon emissions continue to rise in 2025, despite international agreements and efforts to curb greenhouse gases. The increase is driven primarily by continued fossil fuel consumption, deforestation, and industrial activity, which collectively contribute to the accumulation of carbon dioxide (CO2) and other greenhouse gases in the atmosphere. Energy demand has surged in developing and industrialized nations alike, with coal, oil, and natural gas remaining major sources of electricity generation and transportation fuel. This trend offsets gains made by renewable energy adoption, electric vehicles, and energy efficiency measures. Scientists warn that without immediate and aggressive action, the rise in global temperatures could exceed critical thresholds, leading to more frequent heatwaves, extreme weather events, and sea-level rise. International organizations emphasize the need for policy interventions, such as carbon pricing, stricter emission standards, and investment in green technologies. Deforestation and land-use changes also contribute significantly to carbon emissions, highlighting the importance of sustainable forestry and agricultural practices. Individuals and communities are encouraged to reduce personal carbon footprints through energy-efficient homes, sustainable transportation, and conscious consumption choices. Scientists stress that global collaboration, technological innovation, and behavioral changes are all crucial to achieving meaningful reductions in emissions and mitigating climate impacts.',
    image: require('../../assets/envi1.png'),
  },
  {
    id: '10',
    title: 'Ocean Pollution Reaches Record High',
    category: 'Environment',
    description: 'Recent studies reveal that pollution levels in the world’s oceans have reached unprecedented levels, threatening marine ecosystems and human health. Plastic waste, chemical runoff, oil spills, and untreated sewage are among the primary contributors to ocean pollution. Scientists estimate that millions of tons of plastic enter the oceans each year, accumulating in gyres such as the Great Pacific Garbage Patch. Marine species, including fish, turtles, and seabirds, are directly affected. Ingested plastics can block digestive tracts, cause malnutrition, and introduce toxic chemicals into the food chain. Chemical pollutants, including heavy metals and persistent organic compounds, accumulate in marine life and can ultimately affect human health when contaminated seafood is consumed. Industrial runoff containing fertilizers and pesticides causes eutrophication, creating dead zones where oxygen levels are too low to support aquatic life. Microplastics, which result from the breakdown of larger plastics, have been detected in even the most remote areas of the ocean, highlighting the pervasive nature of this problem. Efforts to combat ocean pollution include international agreements to reduce plastic production, local cleanup initiatives, improved waste management systems, and promotion of biodegradable alternatives. Raising public awareness about responsible consumption, recycling, and reducing single-use plastics is also a critical component. Scientists warn that if current trends continue, ocean ecosystems may face irreversible damage, impacting global food security, biodiversity, and climate regulation.',
    image: require('../../assets/envi2.png'),
  },
  {
    id: '11',
    title: 'Heatwaves Intensify Across Europe',
    category: 'Environment',
    description: 'Europe is experiencing increasingly severe heatwaves, attributed to climate change and shifting weather patterns. The rise in global temperatures, combined with extended periods of high pressure, has led to record-breaking heat across multiple countries, with some areas reaching temperatures exceeding 40°C (104°F). Health authorities are warning about the dangers of prolonged heat exposure, particularly for vulnerable populations such as the elderly, children, and those with pre-existing medical conditions. Heatwaves increase the risk of heat stroke, dehydration, and cardiovascular issues. Urban areas face additional challenges due to the heat island effect, where concrete and asphalt trap heat, intensifying local temperatures. Environmental consequences include increased wildfire risks, droughts, and stress on agricultural systems. Crop yields for essential food products may decline, affecting both local and global food supplies. Rivers and lakes are experiencing reduced water levels, impacting aquatic life and freshwater availability. Governments are responding by implementing heat action plans, improving early warning systems, and providing public cooling centers. Citizens are encouraged to stay hydrated, avoid outdoor activities during peak heat, and check on neighbors and vulnerable family members. Scientists emphasize that mitigating climate change through emissions reductions and sustainable practices is essential to preventing even more extreme heat events in the future.',
    image: require('../../assets/envi3.png'),
  },

  // ECONOMY
  {
    id: '12',
    title: 'Cryptocurrency Prices Surge Unexpectedly',
    category: 'Economy',
    description: 'Cryptocurrency markets experienced a sudden surge, with Bitcoin and major altcoins rising sharply in value over a short period. Market analysts attribute this increase to a combination of renewed investor confidence, institutional interest, and developments in blockchain technology. Bitcoin, the largest cryptocurrency by market capitalization, rose by several percentage points within a single day, reaching new highs not seen in months. Ethereum and other altcoins also recorded significant gains, driven by decentralized finance (DeFi) projects, smart contract adoption, and emerging technologies such as Layer 2 scaling solutions. Investors are closely monitoring regulatory developments, as countries continue to debate cryptocurrency frameworks. Positive regulatory signals, such as clearer guidelines and recognition of digital assets, can boost market confidence, while restrictive measures may trigger volatility. Market sentiment is influenced by macroeconomic factors, including inflation trends, interest rates, and traditional stock market performance. Cryptocurrencies are increasingly being viewed as a hedge against inflation or a store of value, alongside gold and other assets. However, experts warn about the high volatility and risks involved in crypto trading, urging investors to conduct thorough research, diversify portfolios, and avoid speculative bubbles.',
    image: require('../../assets/eco1.png'),
  },
  {
    id: '13',
    title: 'Global Oil Prices Drop to 3-Month Low',
    category: 'Economy',
    description: 'Global oil prices have declined sharply, reaching their lowest point in three months. Analysts attribute this drop to a combination of oversupply, weak demand, and geopolitical factors. Major oil-producing countries, including members of OPEC+, continue to balance production quotas to stabilize markets, but unexpected increases in supply from non-OPEC countries have created temporary imbalances. Economic slowdown in key regions, particularly in Europe and Asia, has reduced industrial and transportation demand for crude oil. Seasonal changes, along with mild weather patterns, have also lowered energy consumption, further contributing to price declines. Investors in energy markets closely watch crude futures, which reflect expectations for global supply and demand. Lower oil prices can benefit consumers by reducing fuel costs but may negatively impact oil-exporting economies dependent on energy revenues. Renewable energy adoption and energy efficiency measures are gradually influencing global demand trends, as governments and companies focus on sustainability and reducing carbon footprints. Energy market experts warn that price volatility is likely to continue, with sudden changes in supply, demand, or geopolitical tensions causing rapid swings in oil prices. Companies and governments must remain agile to navigate these fluctuations, balancing economic growth and energy security.',
    image: require('../../assets/eco2.png'),
  },
  {
    id: '14',
    title: 'Inflation Falls to Lowest Level in Years',
    category: 'Economy',
    description: 'Recent reports indicate that inflation rates in several countries have fallen to their lowest levels in years, providing relief for consumers and businesses. Factors contributing to this decline include stabilized energy prices, improved supply chains, and effective monetary policies implemented by central banks. Lower inflation reduces the cost of goods and services, helping households maintain purchasing power and improving overall economic confidence. It also allows central banks more flexibility in managing interest rates and supporting economic growth. However, experts caution that the decrease in inflation may not be uniform across all sectors. Certain essential commodities, including food and healthcare, may still experience price pressures due to local supply challenges or geopolitical disruptions. Economists highlight that sustained low inflation can encourage investment, boost consumer spending, and reduce uncertainty in financial markets. Policymakers continue to monitor economic indicators to prevent deflation, which can harm growth, while maintaining stable prices to support long-term economic stability.',
    image: require('../../assets/eco3.png'),
  },

  // SPORT
  {
    id: '15',
    title: 'Champions League: New Shock Result',
    category: 'Sport',
    description: 'In a surprising turn of events, a major match in the UEFA Champions League ended with an unexpected result, shaking the predictions of fans and analysts alike. The underdog team managed to defeat a favored opponent through strategic gameplay, effective teamwork, and standout performances by key players. This result has significant implications for the tournament, affecting group standings and qualification for the knockout stages. Football analysts are studying the match to understand tactical decisions, player performance, and coaching strategies that led to the upset. Fans reacted passionately on social media, celebrating the victory and expressing disappointment or surprise over the loss of the favored team. Such shock results are part of the excitement of knockout competitions, highlighting the unpredictable nature of sports and the importance of preparation, resilience, and adaptability on the field. The Champions League continues to captivate global audiences, drawing millions of viewers to live broadcasts and streaming platforms. Teams are now preparing for upcoming matches, reassessing strategies, and aiming to secure their positions in the next stages of the tournament.',
    image: require('../../assets/spo1.png'),
  },
  {
    id: '16',
    title: 'FIFA Introduces New Offside Technology',
    category: 'Sport',
    description: 'FIFA has announced the implementation of advanced offside detection technology aimed at improving referee accuracy and reducing controversial decisions during matches. This system uses high-speed cameras, artificial intelligence, and precise player tracking to determine offside positions in real time. The technology is designed to minimize human error, allowing referees to make faster, more confident decisions while maintaining the flow of the game. It integrates with video assistant referee (VAR) systems, offering multiple angles and automated alerts for potential offside situations. Players, coaches, and analysts are closely monitoring the introduction of this system, as it could change tactical approaches, particularly for attacking and defensive strategies. Teams may adapt their positioning and timing to comply with more precise offside rules, while spectators can expect fairer outcomes during matches. FIFA believes this technology represents a step forward in modernizing football, ensuring transparency and enhancing trust in officiating. Pilot tests have shown promising results, and the system is expected to expand across major leagues and international tournaments in the coming seasons.',
    image: require('../../assets/spo2.png'),
  },

  // EDUCATION
  {
    id: '17',
    title: 'AI-Based Learning Tools Become Mainstream',
    category: 'Education',
    description: 'Artificial intelligence is rapidly transforming education, with AI-based learning tools becoming increasingly mainstream in schools, colleges, and universities. These tools use machine learning algorithms to provide personalized instruction, adaptive assessments, and interactive content tailored to each student’s learning pace and style. Platforms integrate AI tutors, chatbots, and predictive analytics to identify knowledge gaps and recommend targeted resources. This enables teachers to focus on higher-level guidance while AI handles repetitive tasks, grading, and feedback. Educational institutions report improvements in student engagement, retention, and outcomes. For example, AI-driven language learning apps can assess pronunciation, vocabulary usage, and comprehension in real time, offering instant corrections. Similarly, STEM platforms provide interactive simulations and problem-solving exercises tailored to each learner. Privacy and ethical considerations remain crucial, as AI collects sensitive student data to optimize learning. Schools implement strong data protection measures while adhering to local regulations. Experts predict that AI in education will continue evolving, creating a hybrid model where technology complements human instruction and expands access to quality learning worldwide.',
    image: require('../../assets/edu1.png'),
  },
  {
    id: '18',
    title: 'New Global Scholarship Program Announced',
    category: 'Education',
    description: 'A major foundation has launched a new global scholarship program aimed at providing educational opportunities to students from diverse backgrounds. The program offers full and partial scholarships, covering tuition, accommodation, and study materials, targeting academically talented students who face financial constraints. Scholarship recipients gain access to prestigious universities and specialized programs in fields such as STEM, social sciences, arts, and humanities. In addition to financial support, the initiative provides mentorship, networking opportunities, and professional development workshops. The foundation emphasizes diversity, inclusion, and global collaboration, encouraging applicants from underrepresented regions and communities. Selection criteria include academic performance, leadership potential, and commitment to societal impact. By investing in education, the program aims to empower the next generation of global leaders, researchers, and innovators. Past scholarship initiatives have shown significant success in improving educational access, fostering cross-cultural exchange, and driving social and economic development in recipient countries.',
    image: require('../../assets/edu2.png'),
  },

  // WORLD
  {
    id: '19',
    title: 'UN Approves New International Peace Mission',
    category: 'World',
    description: 'The United Nations has recently approved a new international peacekeeping mission in response to escalating regional conflicts and humanitarian crises. This mission aims to stabilize affected areas, protect civilians, and support the restoration of political and social order. The peace mission involves multinational troops, observers, and humanitarian aid workers, working under UN mandates to monitor ceasefires, disarm conflicting parties, and facilitate dialogue between opposing groups. Peacekeepers are also tasked with protecting critical infrastructure and ensuring safe access to essential services like food, water, and healthcare. Alongside military and security operations, the mission emphasizes community engagement and reconciliation efforts, promoting local governance, education, and conflict resolution. Special attention is given to vulnerable populations, including women, children, and displaced persons. The approval of this mission reflects the UN’s commitment to preventing further escalation, reducing civilian casualties, and promoting long-term stability. It also highlights the importance of international collaboration, as member states contribute resources, expertise, and personnel to achieve these goals.',
    image: require('../../assets/wor1.png'),
  },
  {
    id: '20',
    title: 'Global Leaders Gather for Climate Summit',
    category: 'World',
    description: 'Global leaders have convened for a major climate summit to address urgent environmental challenges, including rising temperatures, carbon emissions, and biodiversity loss. The summit brings together heads of state, scientists, activists, and business leaders to formulate strategies for sustainable development and climate mitigation. Key topics include transitioning to renewable energy, reducing greenhouse gas emissions, financing climate adaptation projects, and promoting sustainable agriculture and transportation. Delegates discuss binding agreements, policy frameworks, and innovative solutions to accelerate the global response to climate change. The summit also emphasizes climate justice, recognizing the disproportionate impact of environmental degradation on developing countries and vulnerable populations. Collaborative initiatives aim to mobilize funding, technology, and knowledge transfer to support adaptation and resilience. Scientific reports presented at the summit highlight that immediate action is critical to limit global warming to 1.5°C above pre-industrial levels, underscoring the urgency of policy implementation and international cooperation. The outcomes of the summit are expected to guide climate action plans and set ambitious targets for governments and industries worldwide.',
    image: require('../../assets/wor2.png'),
  },
];


const categories = [
  'All',
  'Technology',
  'Science',
  'Health',
  'Environment',
  'Economy',
  'Sport',
  'Education',
  'World',
];

interface ListHeaderProps {
  searchText: string;
  setSearchText: (text: string) => void;
  selectedCategory: string;
  setSelectedCategory:(cat: string) => void;
}

// ---------- کامپوننت جداگانه برای ListHeader ----------
function ListHeader({ searchText, setSearchText, selectedCategory, setSelectedCategory }: ListHeaderProps) {
  return (
    <View style={styles.headerBlock}>
      <Text style={styles.header}>News</Text>

      <TextInput
        style={styles.searchInput}
        placeholder="Search news..."
        value={searchText}
        onChangeText={(text) => setSearchText(text)}
      />

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.categoryScrollContent}
      >
        {categories.map((cat) => (
          <TouchableOpacity
            key={cat}
            onPress={() => setSelectedCategory(cat)}
            style={[
              styles.categoryButton,
              selectedCategory === cat && styles.categoryButtonActive,
            ]}
          >
            <Text
              style={[
                styles.categoryText,
                selectedCategory === cat && styles.categoryTextActive,
              ]}
            >
              {cat}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
}

// ---------- کامپوننت اصلی Home ----------
export default function Home() {
  const router = useRouter();

  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchText, setSearchText] = useState('');

  // فیلتر کردن دیتا بر اساس دسته و سرچ
  const filteredNews = newsData.filter((item) => {
    const matchCategory = selectedCategory === 'All' || item.category === selectedCategory;
    const lower = searchText.trim().toLowerCase();
    const matchSearch = !lower || item.title.toLowerCase().includes(lower) || item.description.toLowerCase().includes(lower);
    return matchCategory && matchSearch;
  });

  return (
    <View style={styles.container}>
      <FlatList
        data={filteredNews}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => router.push({ pathname: '/news/[id]', params: { id: item.id } })}
            style={styles.newsCard}
          >
            <Image source={item.image} style={styles.image} />
            <Text style={styles.title}>{item.title}</Text>
            <Text numberOfLines={2} style={styles.description}>{item.description}</Text>
          </TouchableOpacity>
        )}
        ListHeaderComponent={
          <ListHeader
            searchText={searchText}
            setSearchText={setSearchText}
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
          />
        }
        ListHeaderComponentStyle={{ paddingBottom: 10 }}
        contentContainerStyle={{ paddingHorizontal: 15, paddingBottom: 30 }}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

// ---------- استایل‌ها ----------
const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f2f2f2' },

  headerBlock: {
    paddingTop: 15,
    paddingHorizontal: 15,
    paddingBottom: 10,
    backgroundColor: '#f2f2f2',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 12,
  },

  searchInput: {
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 10,
    fontSize: 16,
    elevation: 2,
    borderWidth: 1,
    borderColor: '#e6e6e6',
    marginBottom: 12,
  },

  categoryScrollContent: {
    paddingLeft: 5,
    paddingRight: 15,
    alignItems: 'center',
  },

  categoryButton: {
    backgroundColor: '#ddd',
    paddingHorizontal: 16,
    borderRadius: 20,
    marginRight: 10,
    height: 38,
    justifyContent: 'center',
    alignItems: 'center',
  },
  categoryButtonActive: {
    backgroundColor: '#333',
  },
  categoryText: {
    fontSize: 15,
    color: '#333',
    textAlign: 'center',
  },
  categoryTextActive: {
    color: '#fff',
  },

  newsCard: {
    backgroundColor: 'white',
    padding: 12,
    marginTop: 12,
    borderRadius: 10,
    elevation: 3,
  },
  image: {
    width: '100%',
    height: 180,
    borderRadius: 10,
    marginBottom: 10,
  },
  title: { fontSize: 20, fontWeight: 'bold', marginBottom: 6 },
  description: { fontSize: 15, color: '#444' },
});