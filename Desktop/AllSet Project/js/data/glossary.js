// Glossary data from Physician's Documentation Prescription 2024
const glossaryData = [
    {
        term: "7CE",
        definition: "7th Character Encounter",
        category: "coding"
    },
    {
        term: "Ac",
        definition: "Acute",
        category: "medical"
    },
    {
        term: "AISS",
        definition: "Acute illness with systemic symptoms (general or single system): untreated has high risk of morbidity",
        category: "medical"
    },
    {
        term: "Ambidextrous",
        definition: "Ability to use right and left hands equally well",
        category: "medical"
    },
    {
        term: "Antibiogram",
        definition: "A table comparing bacteria and their antibiotic sensitivities",
        category: "medical"
    },
    {
        term: "ASD",
        definition: "ALL SET DOC?",
        category: "mnemonic"
    },
    {
        term: "AUI",
        definition: "Acute, uncomplicated illness or injury: recent/new short-term problem, low risk of morbidity/mortality w tx, full recovery wo functional impairment expected",
        category: "medical"
    },
    {
        term: "C19",
        definition: "COVID-19",
        category: "medical"
    },
    {
        term: "CC",
        definition: "Comorbid Condition with a severity of illness higher than other diseases",
        category: "coding"
    },
    {
        term: "CDI",
        definition: "Clinical Documentation Integrity",
        category: "documentation"
    },
    {
        term: "CD",
        definition: "Clinical Documentation",
        category: "documentation"
    },
    {
        term: "CDIS",
        definition: "Clinical Documentation Integrity Specialist",
        category: "documentation"
    },
    {
        term: "CDS",
        definition: "Clinical Documentation Specialist",
        category: "documentation"
    },
    {
        term: "CIE",
        definition: "Chronic Illness w exacerbation/progression",
        category: "medical"
    },
    {
        term: "CIs",
        definition: "Clinical Indicators: Risk factors, history, symptoms, signs, test results, and responses to treatment that support a diagnosis",
        category: "medical"
    },
    {
        term: "CISE",
        definition: "Chronic Illness w Severe Exacerbation/Progression",
        category: "medical"
    },
    {
        term: "CMC",
        definition: "Current Medical Condition",
        category: "medical"
    },
    {
        term: "CMH",
        definition: "Current Medical History, includes ALL diseases still present",
        category: "medical"
    },
    {
        term: "COMDM",
        definition: "Complexity of Medical-Decision-Making for CPT®",
        category: "coding"
    },
    {
        term: "COVID-19",
        definition: "Disease caused by SARS-CoV-2, identified in 2019",
        category: "medical"
    },
    {
        term: "CPPA",
        definition: "Correctly-prescribed properly-administered/taken",
        category: "medical"
    },
    {
        term: "CPT®",
        definition: "AMA publication Current Procedural Terminology",
        category: "coding"
    },
    {
        term: "CV",
        definition: "Clinical Validation: criteria used to verify, for lay readers, that a Diagnosis is present",
        category: "documentation"
    },
    {
        term: "Diagnosis",
        definition: "Diagnosis, condition, or disease",
        category: "medical"
    },
    {
        term: "DL",
        definition: "Diagnosis List, a crucial section of the H&P, progress notes and Discharge Summary",
        category: "documentation"
    },
    {
        term: "Dt, d/t",
        definition: "Due to",
        category: "documentation"
    },
    {
        term: "Dx",
        definition: "Diagnosis",
        category: "medical"
    },
    {
        term: "dX",
        definition: "Used to represent a generic diagnosis for illustrative purposes",
        category: "documentation"
    },
    {
        term: "E&M",
        definition: "Evaluation & Management",
        category: "coding"
    },
    {
        term: "EHR",
        definition: "Electronic Health Record or Electronic Medical Record",
        category: "technology"
    },
    {
        term: "EO",
        definition: "Evidence of",
        category: "documentation"
    },
    {
        term: "eX",
        definition: "Used to represent a generic etiology for illustrative purposes",
        category: "documentation"
    },
    {
        term: "FT",
        definition: "Function threatening",
        category: "medical"
    },
    {
        term: "GLF",
        definition: "Ground level fall",
        category: "medical"
    },
    {
        term: "Handedness",
        definition: "The tendency to use either the right or the left hand more easily or skillfully than the other",
        category: "medical"
    },
    {
        term: "HCC",
        definition: "Hierarchical Condition Category, a relative value calculated annually for each i10 code from actual billing data and used, in a risk-adjustment model, to estimate future health care costs for managed care patients",
        category: "coding"
    },
    {
        term: "HCPCS",
        definition: "Healthcare Common Procedure Coding System",
        category: "coding"
    },
    {
        term: "H&P",
        definition: "History and Physical, the first note for an admitted patient; for CPT® it must be done on the date of the admission",
        category: "documentation"
    },
    {
        term: "i10",
        definition: "Short-hand for ICD-10-CM (diagnosis codes), ICD-10-PCS (procedure codes) or both (ICD-10-CM/PCS)",
        category: "coding"
    },
    {
        term: "i10talk",
        definition: "Context or definition of terms are unique to i10",
        category: "coding"
    },
    {
        term: "KRT",
        definition: "Kidney replacement therapy",
        category: "medical"
    },
    {
        term: "LOS",
        definition: "Length of stay",
        category: "medical"
    },
    {
        term: "LT",
        definition: "Life Threatening",
        category: "medical"
    },
    {
        term: "MCC",
        definition: "Major Comorbid Condition with the highest severity of illness",
        category: "coding"
    },
    {
        term: "MEAT",
        definition: "Monitored, evaluated, assessed, or treated",
        category: "documentation"
    },
    {
        term: "Mnemonic",
        definition: "A tool, such as a pattern of letters, ideas, or associations that assist learning or remembering something",
        category: "education"
    },
    {
        term: "MOD",
        definition: "Multi Organ Dysfunction with sepsis",
        category: "medical"
    },
    {
        term: "MP",
        definition: "Minimal problem: may not require a physician but service is provided under their supervision",
        category: "medical"
    },
    {
        term: "Not-CPPA",
        definition: "The drug was either not correctly-prescribed or not properly-administered/taken",
        category: "medical"
    },
    {
        term: "Other, Specified, Named",
        definition: "In an i10 code descriptor, these terms mean you need to document a specific disease name as the Diagnosis",
        category: "coding"
    },
    {
        term: "OQHP",
        definition: "Other qualified health care professional",
        category: "medical"
    },
    {
        term: "Physician",
        definition: "Per ICD-10-CM Guidelines: \"physician or any qualified health care practitioner who is legally accountable for establishing the patient's diagnosis.\"",
        category: "medical"
    },
    {
        term: "PMH",
        definition: "Past Medical History: the conditions that are over and gone",
        category: "medical"
    },
    {
        term: "PSI",
        definition: "Patient Safety Indicator",
        category: "quality"
    },
    {
        term: "QHP",
        definition: "Qualified Health Professional (qualified to make a diagnosis)",
        category: "medical"
    },
    {
        term: "RAF",
        definition: "Risk Adjustment Factor",
        category: "coding"
    },
    {
        term: "ROM",
        definition: "Risk of Mortality, a relative value calculated annually for each i10 code from actual mortality data",
        category: "coding"
    },
    {
        term: "RUQ",
        definition: "Abdomen: Right upper quadrant",
        category: "anatomy"
    },
    {
        term: "RLQ",
        definition: "Right lower quadrant",
        category: "anatomy"
    },
    {
        term: "LUQ",
        definition: "Left upper quadrant",
        category: "anatomy"
    },
    {
        term: "LLQ",
        definition: "Left lower quadrant",
        category: "anatomy"
    },
    {
        term: "SAI",
        definition: "Stable acute illness: new/recent treatment initiated, patient improving",
        category: "medical"
    },
    {
        term: "SCI",
        definition: "Stable chronic illness: expected duration >1yr/patient death, patient at treatment goals",
        category: "medical"
    },
    {
        term: "SDOH",
        definition: "Social determinants of health (impact MDM)",
        category: "medical"
    },
    {
        term: "SLP",
        definition: "Self-limited problem: runs a definite/prescribed course, is transient, not likely to permanently alter health status",
        category: "medical"
    },
    {
        term: "SOI",
        definition: "Severity of illness, a relative value calculated annually for each i10 code from actual billing data and used to determine how sick a patient is",
        category: "coding"
    },
    {
        term: "SPL",
        definition: "'Suspect,' 'probable' or 'likely'",
        category: "documentation"
    },
    {
        term: "Syn",
        definition: "Syndrome",
        category: "medical"
    },
    {
        term: "Term",
        definition: "A word or group of words",
        category: "documentation"
    },
    {
        term: "UNP",
        definition: "Undiagnosed New Problem w uncertain prognosis",
        category: "medical"
    },
    {
        term: "Unspecified",
        definition: "Strike through indicates a term that should be avoided, if possible",
        category: "documentation"
    },
    {
        term: "W",
        definition: "With",
        category: "documentation"
    },
    {
        term: "Wo, w/o",
        definition: "Without",
        category: "documentation"
    },
    {
        term: "Write",
        definition: "Write, dictate, click, type, copy-paste, & all methods of creating the permanent medical record",
        category: "documentation"
    },
    {
        term: "ALL SET DOC",
        definition: "Mnemonic for comprehensive ICD-10-CM documentation: Acuity, Links, Laterality, Site, Etiology, Type, Diagnosis, Occurrence, Comorbidity/Complications",
        category: "mnemonic"
    },
    {
        term: "Acuity",
        definition: "Determined from patient's history: acute on chronic being the most severe. Terms include 'status', 'acute on chronic'/'exacerbation', 'acute', 'chronic', 'subsequent', 'old' and 'congenital'",
        category: "mnemonic"
    },
    {
        term: "Links",
        definition: "SOI is often increased when a Diagnosis is Linked to an Etiology or Complications using 'due to', 'with', 'from', or 'in'",
        category: "mnemonic"
    },
    {
        term: "Laterality",
        definition: "'Right,' 'left' or 'bilateral' needed for diagnoses with paired anatomic structures. For neurological disorders, document both side of impairment and patient's handedness",
        category: "mnemonic"
    },
    {
        term: "Site",
        definition: "Be specific, use precise anatomy including laterality. Some specialties have ICD-10-CM specific anatomic terminology",
        category: "mnemonic"
    },
    {
        term: "Etiology",
        definition: "Link the Diagnosis to the cause. When uncertain, document 'evidence of an etiology'. For infections determine a 'suspected' organism",
        category: "mnemonic"
    },
    {
        term: "Type",
        definition: "Document distinct Types of medical conditions: degree, severity, stage. Examples: burn degree (1°, 2°, 3°), diabetes type (DM1, DM2, gestational)",
        category: "mnemonic"
    },
    {
        term: "Occurrence",
        definition: "All circumstances of the encounter. Link findings to the Diagnosis. Include pertinent history, symptoms, signs, test results, and clinical indicators",
        category: "mnemonic"
    },
    {
        term: "Comorbidity",
        definition: "Take credit for sick patient, document all acute and chronic conditions to capture true SOI/ROM/COMDM",
        category: "mnemonic"
    },
    {
        term: "Complications",
        definition: "NEVER use 'complication' unless the condition was preventable. Use 'with' to link them to a Diagnosis",
        category: "mnemonic"
    }
];

// Search functionality
function searchGlossary(searchTerm) {
    if (!searchTerm) return glossaryData;
    
    const term = searchTerm.toLowerCase();
    return glossaryData.filter(item => 
        item.term.toLowerCase().includes(term) || 
        item.definition.toLowerCase().includes(term) ||
        item.category.toLowerCase().includes(term)
    );
}

// Filter by category
function filterByCategory(category) {
    if (!category || category === 'all') return glossaryData;
    return glossaryData.filter(item => item.category === category);
}

// Get all unique categories
function getCategories() {
    const categories = [...new Set(glossaryData.map(item => item.category))];
    return categories.sort();
}

// Render glossary items as HTML
function renderGlossaryItems(items) {
    return items.map(item => `
        <div class="glossary-item" data-category="${item.category}">
            <div class="term-header">
                <h3 class="glossary-term">${item.term}</h3>
                <span class="category-tag category-${item.category}">${item.category}</span>
            </div>
            <p class="glossary-definition">${item.definition}</p>
        </div>
    `).join('');
}

// Initialize glossary page
function initGlossary() {
    const searchInput = document.getElementById('glossarySearch');
    const categoryFilter = document.getElementById('categoryFilter');
    const glossaryContainer = document.getElementById('glossaryContainer');
    const statsElement = document.getElementById('glossaryStats');
    
    if (!glossaryContainer) return;
    
    // Populate category filter
    if (categoryFilter) {
        const categories = getCategories();
        categoryFilter.innerHTML = `
            <option value="all">All Categories</option>
            ${categories.map(cat => 
                `<option value="${cat}">${cat.charAt(0).toUpperCase() + cat.slice(1)}</option>`
            ).join('')}
        `;
    }
    
    // Function to update display
    function updateDisplay() {
        const searchTerm = searchInput ? searchInput.value : '';
        const selectedCategory = categoryFilter ? categoryFilter.value : 'all';
        
        let filteredItems = glossaryData;
        
        // Apply search filter
        if (searchTerm) {
            filteredItems = searchGlossary(searchTerm);
        }
        
        // Apply category filter
        if (selectedCategory !== 'all') {
            filteredItems = filteredItems.filter(item => item.category === selectedCategory);
        }
        
        // Sort alphabetically by term
        filteredItems.sort((a, b) => a.term.localeCompare(b.term));
        
        // Update display
        glossaryContainer.innerHTML = renderGlossaryItems(filteredItems);
        
        // Update stats
        if (statsElement) {
            const totalTerms = glossaryData.length;
            const displayedTerms = filteredItems.length;
            const categories = getCategories().length;
            
            statsElement.innerHTML = `
                Showing ${displayedTerms} of ${totalTerms} terms across ${categories} categories
            `;
        }
        
        // Highlight search term
        if (searchTerm) {
            highlightSearchTerm(searchTerm);
        }
    }
    
    // Function to highlight search terms
    function highlightSearchTerm(searchTerm) {
        const terms = document.querySelectorAll('.glossary-term, .glossary-definition');
        const regex = new RegExp(`(${searchTerm})`, 'gi');
        
        terms.forEach(element => {
            if (element.textContent.toLowerCase().includes(searchTerm.toLowerCase())) {
                element.innerHTML = element.innerHTML.replace(regex, '<mark>$1</mark>');
            }
        });
    }
    
    // Event listeners
    if (searchInput) {
        searchInput.addEventListener('input', updateDisplay);
        
        // Keyboard shortcut (Ctrl+K to focus search)
        document.addEventListener('keydown', function(e) {
            if (e.ctrlKey && e.key === 'k') {
                e.preventDefault();
                searchInput.focus();
            }
        });
    }
    
    if (categoryFilter) {
        categoryFilter.addEventListener('change', updateDisplay);
    }
    
    // Initial display
    updateDisplay();
}

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        glossaryData,
        searchGlossary,
        filterByCategory,
        getCategories,
        initGlossary
    };
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', initGlossary);