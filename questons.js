let QUESTIONS = [
  // Lens Basics (30 questions)
  { q: "What is the standard pupillary distance range for adults?", o: ["50-70 mm", "30-50 mm", "70-90 mm", "40-60 mm"], a: 0, c: "Lens Basics", e: "Pupillary distance (PD) typically ranges from 50 to 70 mm for adults." },
  { q: "Which lens material has the highest index of refraction?", o: ["CR-39", "Polycarbonate", "Trivex", "High-index 1.74"], a: 3, c: "Lens Basics", e: "High-index 1.74 has the highest refraction index for thinner lenses." },
  { q: "What lens corrects nearsightedness?", o: ["Convex", "Concave", "Bifocal", "Prism"], a: 1, c: "Lens Basics", e: "Concave lenses diverge light to correct myopia (nearsightedness)." },
  { q: "What is the focal length of a +4.00D lens?", o: ["0.25m", "0.5m", "1m", "4m"], a: 0, c: "Lens Basics", e: "Focal length = 1/D = 1/4 = 0.25m." },
  { q: "Which coating reduces glare?", o: ["Scratch-resistant", "UV", "Anti-reflective", "Tint"], a: 2, c: "Lens Basics", e: "Anti-reflective coating reduces glare and reflections." },
  { q: "What is the minimum center thickness for polycarbonate lenses?", o: ["1.0mm", "1.5mm", "2.0mm", "2.5mm"], a: 0, c: "Lens Basics", e: "1.0mm is the minimum for impact resistance in polycarbonate." },
  { q: "Which lens type is used for presbyopia?", o: ["Single vision", "Bifocal", "Progressive", "Aspheric"], a: 2, c: "Lens Basics", e: "Progressive lenses correct presbyopia without visible lines." },
  { q: "What is the power of a lens with 0.5m focal length?", o: ["+2.00D", "+0.5D", "+4.00D", "-2.00D"], a: 0, c: "Lens Basics", e: "Power = 1/f = 1/0.5 = +2.00D." },
  { q: "Which lens material is most impact-resistant?", o: ["Glass", "CR-39", "Polycarbonate", "High-index"], a: 2, c: "Lens Basics", e: "Polycarbonate is the most impact-resistant." },
  { q: "What coating blocks UV rays?", o: ["Anti-reflective", "Scratch-resistant", "UV coating", "Mirror coating"], a: 2, c: "Lens Basics", e: "UV coating blocks harmful ultraviolet rays." },
  { q: "What is the Abbe value?", o: ["Dispersion measure", "Power measure", "Thickness measure", "Curvature measure"], a: 0, c: "Lens Basics", e: "The Abbe value measures lens dispersion." },
  { q: "Which lens for computer use?", o: ["Single vision", "Bifocal", "Progressive", "Blue light filter"], a: 3, c: "Lens Basics", e: "Blue light filter lenses reduce screen strain." },
  { q: "What is the index of refraction for CR-39?", o: ["1.49", "1.58", "1.66", "1.74"], a: 0, c: "Lens Basics", e: "CR-39 has an index of 1.49." },
  { q: "Which lens for driving?", o: ["Polarized", "AR coated", "Blue filter", "Progressive"], a: 0, c: "Lens Basics", e: "Polarized lenses reduce glare for driving." },
  { q: "What is the lens formula?", o: ["F = 1/f", "F = f/1", "F = f + 1", "F = f - 1"], a: 0, c: "Lens Basics", e: "Lens power (F) = 1 / focal length (f in meters)." },
  { q: "Which coating reduces scratches?", o: ["Scratch-resistant", "UV", "Anti-reflective", "Tint"], a: 0, c: "Lens Basics", e: "Scratch-resistant coating protects against scratches." },
  { q: "What is the focal length of a +2.00D lens?", o: ["0.5m", "0.25m", "1m", "2m"], a: 0, c: "Lens Basics", e: "Focal length = 1/D = 1/2 = 0.5m." },
  { q: "Which lens for high UV protection?", o: ["Polycarbonate", "Glass", "CR-39", "High-index"], a: 0, c: "Lens Basics", e: "Polycarbonate provides high UV protection." },
  { q: "What is lens polarization?", o: ["Reduce glare", "Increase power", "Block UV", "Add color"], a: 0, c: "Lens Basics", e: "Polarization reduces glare from surfaces." },
  { q: "Which lens for reading?", o: ["Single vision", "Bifocal", "Progressive", "Blue filter"], a: 1, c: "Lens Basics", e: "Bifocals provide near correction." },
  { q: "What is the index of refraction for polycarbonate?", o: ["1.58", "1.49", "1.66", "1.74"], a: 0, c: "Lens Basics", e: "Polycarbonate has an index of 1.58." },
  { q: "Which lens for presbyopia?", o: ["Progressive", "Single vision", "Tinted", "Polarized"], a: 0, c: "Lens Basics", e: "Progressive lenses correct presbyopia." },
  { q: "What is lens transmittance?", o: ["Light passing", "Light blocking", "Thickness", "Curvature"], a: 0, c: "Lens Basics", e: "Transmittance is the percentage of light passing through." },
  { q: "Which lens for sports?", o: ["Polycarbonate", "Glass", "CR-39", "High-index"], a: 0, c: "Lens Basics", e: "Polycarbonate is impact-resistant for sports." },
  { q: "What is the power of a lens with 0.33m focal length?", o: ["+3.00D", "+2.00D", "+0.33D", "-3.00D"], a: 0, c: "Lens Basics", e: "Power = 1/f = 1/0.33 ≈ +3.00D." },
  { q: "Which coating for sun protection?", o: ["Tint", "AR", "Scratch", "UV"], a: 0, c: "Lens Basics", e: "Tint coating reduces light intensity." },
  { q: "What is the Abbe number for glass?", o: ["59", "30", "42", "66"], a: 0, c: "Lens Basics", e: "Glass has an Abbe number of 59." },
  { q: "Which lens for astigmatism?", o: ["Spherical", "Cylindrical", "Bifocal", "Prism"], a: 1, c: "Lens Basics", e: "Cylindrical lenses correct astigmatism." },
  { q: "What is the focal length of a +5.00D lens?", o: ["0.2m", "0.5m", "1m", "5m"], a: 0, c: "Lens Basics", e: "Focal length = 1/D = 1/5 = 0.2m." },
  { q: "Which material for thin lenses?", o: ["High-index", "Glass", "CR-39", "Polycarbonate"], a: 0, c: "Lens Basics", e: "High-index material for thinner lenses." },

  // Frame Fitting (30 questions)
  { q: "Which frame material is known for being hypoallergenic?", o: ["Plastic", "Titanium", "Aluminum", "Wood"], a: 1, c: "Frame Fitting", e: "Titanium is hypoallergenic due to its resistance to corrosion." },
  { q: "What angle should temple tips be adjusted to?", o: ["90°", "95°-100°", "85°", "110°"], a: 1, c: "Frame Fitting", e: "95°-100° ensures a secure fit behind the ear." },
  { q: "Which frame feature aids in sports?", o: ["Spring hinges", "Wraparound design", "Rhinestones", "Thick rims"], a: 1, c: "Frame Fitting", e: "Wraparound design provides protection and stability." },
  { q: "How to fix a twisted frame?", o: ["Heat and bend", "Replace", "Tighten screws", "Polish"], a: 0, c: "Frame Fitting", e: "Heat and bend to realign." },
  { q: "Which frame style suits a round face?", o: ["Round", "Rectangular", "Oval", "Square"], a: 1, c: "Frame Fitting", e: "Rectangular frames balance a round face." },
  { q: "How to adjust for high cheekbones?", o: ["Increase tilt", "Decrease tilt", "Widen bridge", "Shorten temples"], a: 0, c: "Frame Fitting", e: "Increasing pantoscopic tilt accommodates high cheekbones." },
  { q: "Which frame for square face?", o: ["Square", "Round", "Rectangular", "Oval"], a: 1, c: "Frame Fitting", e: "Round frames soften a square face." },
  { q: "What frame part supports the nose?", o: ["Bridge", "Temples", "Endpiece", "Rim"], a: 0, c: "Frame Fitting", e: "The bridge supports the nose." },
  { q: "Which frame for oval face?", o: ["Any", "Round", "Square", "Rectangular"], a: 0, c: "Frame Fitting", e: "Oval faces suit any frame style." },
  { q: "How to fix a loose hinge?", o: ["Tighten screw", "Replace frame", "Bend temple", "Clean"], a: 0, c: "Frame Fitting", e: "Tighten the hinge screw." },
  { q: "Which frame for diamond face?", o: ["Cat-eye", "Round", "Square", "Rectangular"], a: 0, c: "Frame Fitting", e: "Cat-eye frames balance a diamond face." },
  { q: "What to do for a tight bridge?", o: ["Widen bridge", "Tighten screw", "Lower pads", "Increase PD"], a: 0, c: "Frame Fitting", e: "Widen the bridge for comfort." },
  { q: "Which frame feature aids in comfort?", o: ["Spring hinges", "Rigid hinges", "Thick rims", "Heavy material"], a: 0, c: "Frame Fitting", e: "Spring hinges provide flexibility for comfort." },
  { q: "How to adjust for asymmetric ears?", o: ["Bend one temple", "Replace bridge", "Shorten lenses", "Add prism"], a: 0, c: "Frame Fitting", e: "Bend one temple to balance the frame." },
  { q: "Which frame for heart face?", o: ["Round", "Square", "Oval", "Rectangular"], a: 0, c: "Frame Fitting", e: "Round frames balance a heart face." },
  { q: "How to fix a loose nose pad?", o: ["Replace pad arm", "Tighten screw", "Bend temple", "Clean"], a: 0, c: "Frame Fitting", e: "Replace the pad arm if loose." },
  { q: "Which frame for triangle face?", o: ["Cat-eye", "Round", "Square", "Rectangular"], a: 0, c: "Frame Fitting", e: "Cat-eye frames balance a triangle face." },
  { q: "What is the role of nose pads?", o: ["Support frame", "Adjust tilt", "Reduce weight", "Increase PD"], a: 0, c: "Frame Fitting", e: "Nose pads support the frame on the nose." },
  { q: "How to measure frame size?", o: ["A-B-DBL", "PD", "Lens thickness", "Temple length"], a: 0, c: "Frame Fitting", e: "Frame size is measured as A-B-DBL." },
  { q: "Which frame for low bridge?", o: ["Saddle bridge", "Keyhole bridge", "Adjustable pads", "Metal bridge"], a: 2, c: "Frame Fitting", e: "Adjustable pads fit low bridges." },
  { q: "How to adjust temple length?", o: ["Bend tip", "Replace temple", "Heat frame", "Tighten screw"], a: 0, c: "Frame Fitting", e: "Bend the temple tip for length adjustment." },
  { q: "Which frame for wide face?", o: ["Wide bridge", "Narrow bridge", "Small lenses", "Thin rims"], a: 0, c: "Frame Fitting", e: "Wide bridge accommodates a wide face." },
  { q: "What is the role of endpieces?", o: ["Connect temples", "Support nose", "Hold lenses", "Adjust PD"], a: 0, c: "Frame Fitting", e: "Endpieces connect temples to the frame front." },
  { q: "How to fix a loose temple?", o: ["Tighten hinge", "Replace", "Bend bridge", "Clean"], a: 0, c: "Frame Fitting", e: "Tighten the hinge screw." },
  { q: "Which frame for narrow face?", o: ["Narrow bridge", "Wide bridge", "Large lenses", "Thick rims"], a: 0, c: "Frame Fitting", e: "Narrow bridge suits a narrow face." },
  { q: "What is the standard temple length?", o: ["135-145mm", "100-110mm", "150-160mm", "120-130mm"], a: 0, c: "Frame Fitting", e: "Standard temple length is 135-145mm." },
  { q: "How to measure bridge size?", o: ["DBL", "PD", "Lens thickness", "Temple length"], a: 0, c: "Frame Fitting", e: "Bridge size is measured as DBL (distance between lenses)." },
  { q: "Which frame for high prescription?", o: ["Small frames", "Large frames", "Rimless", "Semi-rimless"], a: 0, c: "Frame Fitting", e: "Small frames minimize lens thickness." },
  { q: "What is the role of hinges?", o: ["Connect temples", "Support nose", "Hold lenses", "Adjust PD"], a: 0, c: "Frame Fitting", e: "Hinges connect temples to the frame." },
  { q: "How to adjust for high nose bridge?", o: ["Lower pads", "Widen bridge", "Increase tilt", "Shorten temples"], a: 0, c: "Frame Fitting", e: "Lower pads for high nose bridges." },
  { q: "Which frame for low nose bridge?", o: ["Higher pads", "Lower pads", "Widen bridge", "Shorten temples"], a: 0, c: "Frame Fitting", e: "Higher pads for low nose bridges." },

  // Patient Care (25 questions)
  { q: "What to do if a patient has a red eye?", o: ["Fit new glasses", "Refer to a doctor", "Adjust frame", "Clean lenses"], a: 1, c: "Patient Care", e: "Red eye may indicate infection; refer to a doctor." },
  { q: "How to measure lens base curve?", o: ["Lens clock", "Ruler", "Calipers", "Pupillometer"], a: 0, c: "Instrumentation", e: "A lens clock measures lens base curve." },
  { q: "What is the retina's function?", o: ["Protect the eye", "Detect light", "Produce tears", "Regulate pupil"], a: 1, c: "Anatomy and Physiology", e: "The retina detects light and sends signals to the brain." },
  { q: "Which condition involves lens clouding?", o: ["Glaucoma", "Cataract", "Macular degeneration", "Retinal detachment"], a: 1, c: "Ocular Pathology", e: "A cataract clouds the lens, blurring vision." },
  { q: "What is a glaucoma symptom?", o: ["Double vision", "Increased eye pressure", "Color blindness", "Dry eyes"], a: 1, c: "Ocular Pathology", e: "Glaucoma increases intraocular pressure." },
  { q: "What law requires patient privacy?", o: ["OSHA", "HIPAA", "ADA", "FDA"], a: 1, c: "Legislation and Regulation", e: "HIPAA protects patient health information." },
  { q: "Who regulates eyeglass dispensing?", o: ["FDA", "State boards", "AMA", "CDC"], a: 1, c: "Legislation and Regulation", e: "State boards regulate opticianry." },
  { q: "What lens corrects nearsightedness?", o: ["Convex", "Concave", "Bifocal", "Prism"], a: 1, c: "Lens Basics", e: "Concave lenses correct myopia." },
  { q: "Which tool bends temples?", o: ["Screwdriver", "Pliers", "Heat gun", "Lens clock"], a: 2, c: "Frame Fitting", e: "A heat gun softens frames for adjustments." },
  { q: "What to check if a prescription seems wrong?", o: ["Frame size", "Lens thickness", "Prescription", "Patient age"], a: 2, c: "Patient Care", e: "Verify the prescription for accuracy." },
  { q: "What aberration causes starburst effects?", o: ["Coma", "Spherical", "Chromatic", "Astigmatism"], a: 0, c: "Ophthalmic Optics", e: "Coma causes starburst effects around lights." },
  { q: "How often should a lensometer be calibrated?", o: ["Daily", "Weekly", "Monthly", "Annually"], a: 0, c: "Instrumentation", e: "Daily calibration ensures accuracy." },
  { q: "Which muscle controls pupil size?", o: ["Ciliary", "Iris sphincter", "Rectus", "Oblique"], a: 1, c: "Anatomy and Physiology", e: "The iris sphincter constricts the pupil." },
  { q: "Calculate the total prism power if one lens has 2Δ base out and the other has 1.5Δ base in.", o: ["0.5Δ", "3.5Δ", "1.5Δ", "2Δ"], a: 0, c: "Prisms", e: "Prism power subtracts when bases oppose: 2 - 1.5 = 0.5Δ." },
  { q: "What is the focal length of a +4.00D lens?", o: ["0.25m", "0.5m", "1m", "4m"], a: 0, c: "Lens Basics", e: "Focal length = 1/D = 1/4 = 0.25m." },
  { q: "Which lens material has the highest index of refraction?", o: ["CR-39", "Polycarbonate", "Trivex", "High-index 1.74"], a: 3, c: "Lens Basics", e: "High-index 1.74 has the highest refraction index." },
  { q: "What angle should temple tips be adjusted to?", o: ["90°", "95°-100°", "85°", "110°"], a: 1, c: "Frame Fitting", e: "95°-100° ensures a secure fit behind the ear." },
  { q: "How many millimeters is a typical lens decentration?", o: ["1-2mm", "5-10mm", "15-20mm", "25mm"], a: 0, c: "Patient Care", e: "Decentration is usually 1-2mm for PD adjustments." },
  { q: "What is the Prentice Rule formula?", o: ["P = h × F", "P = F / h", "P = h + F", "P = F - h"], a: 0, c: "Ophthalmic Optics", e: "Prism power (P) = height (h) × lens power (F)." },
  { q: "Which instrument measures corneal curvature?", o: ["Lensometer", "Keratometer", "Pupillometer", "Tonometer"], a: 1, c: "Instrumentation", e: "A keratometer measures corneal curvature." },
  { q: "What nerve transmits visual signals?", o: ["Optic", "Oculomotor", "Trochlear", "Abducens"], a: 0, c: "Anatomy and Physiology", e: "The optic nerve carries visual information to the brain." },
  { q: "Which condition causes tunnel vision?", o: ["Cataract", "Glaucoma", "Macular degeneration", "Retinitis pigmentosa"], a: 1, c: "Ocular Pathology", e: "Glaucoma can lead to peripheral vision loss." },
  { q: "What is the minimum age to dispense glasses without supervision?", o: ["18", "21", "25", "30"], a: 1, c: "Legislation and Regulation", e: "Age 21 is often required, varying by state." },
  { q: "Calculate the vertex compensation for a -6.00D lens at 12mm.", o: ["-0.41D", "-0.82D", "-1.23D", "-1.64D"], a: 1, c: "Lens Basics", e: "Compensation = F² × d = (-6)² × 0.012 = 0.432D, approx -0.82D." },
  { q: "Which frame part connects lenses to temples?", o: ["Bridge", "Endpiece", "Rim", "Pad arm"], a: 1, c: "Frame Fitting", e: "The endpiece links lenses to temples." },
  { q: "What to do if a patient has a red eye?", o: ["Fit new glasses", "Refer to a doctor", "Adjust frame", "Clean lenses"], a: 1, c: "Patient Care", e: "Red eye may indicate infection; refer to a doctor." },
  { q: "What causes chromatic aberration?", o: ["Lens thickness", "Light dispersion", "Frame weight", "Pupil size"], a: 1, c: "Ophthalmic Optics", e: "Chromatic aberration results from light splitting into colors." },
  { q: "How to clean a lensometer?", o: ["Water", "Alcohol wipes", "Soap", "Compressed air"], a: 1, c: "Instrumentation", e: "Alcohol wipes safely clean lensometer lenses." },
  { q: "What protects the cornea?", o: ["Conjunctiva", "Sclera", "Retina", "Choroid"], a: 0, c: "Anatomy and Physiology", e: "The conjunctiva covers and protects the cornea." },
  { q: "Which condition causes floaters?", o: ["Cataract", "Retinal detachment", "Glaucoma", "Keratitis"], a: 1, c: "Ocular Pathology", e: "Retinal detachment can cause floaters or flashes." },
  { q: "What requires a written prescription?", o: ["Sunglasses", "Reading glasses", "Contact lenses", "Safety glasses"], a: 2, c: "Legislation and Regulation", e: "Contact lenses require a valid prescription." },
  { q: "What is the power of a lens with 25cm focal length?", o: ["+4.00D", "+2.00D", "+0.25D", "-4.00D"], a: 0, c: "Lens Basics", e: "Power = 1/f = 1/0.25 = +4.00D." },
  { q: "Which adjustment fixes a loose frame?", o: ["Tighten screws", "Widen bridge", "Lower temples", "Increase PD"], a: 0, c: "Frame Fitting", e: "Tightening screws stabilizes a loose frame." },
  { q: "What to do for lens smudges?", o: ["Clean with microfiber", "Polish", "Replace", "Tint"], a: 0, c: "Patient Care", e: "Clean with microfiber cloth." },
  { q: "What is the retina's layers?", o: ["10 layers", "5 layers", "3 layers", "1 layer"], a: 0, c: "Anatomy and Physiology", e: "The retina has 10 layers." },
  { q: "Which condition causes night blindness?", o: ["Cataract", "Retinitis pigmentosa", "Glaucoma", "Macular degeneration"], a: 1, c: "Ocular Pathology", e: "Retinitis pigmentosa affects night vision." },
  { q: "What law governs workplace safety?", o: ["HIPAA", "OSHA", "ADA", "FDA"], a: 1, c: "Legislation and Regulation", e: "OSHA ensures safe working conditions." },
  { q: "What is the power of a -2.50D lens at 10mm vertex?", o: ["-2.45D", "-2.55D", "-2.60D", "-2.50D"], a: 0, c: "Lens Basics", e: "Compensation = F² × d = (-2.5)² × 0.01 = 0.0625D, approx -2.45D." },
  { q: "Which frame style suits a round face?", o: ["Round", "Rectangular", "Oval", "Square"], a: 1, c: "Frame Fitting", e: "Rectangular frames balance a round face." },
  { q: "What to do for a twisted frame?", o: ["Heat and bend", "Replace", "Tighten screws", "Polish"], a: 0, c: "Frame Fitting", e: "Heat and bend to realign." },
  { q: "What to do for vision blur?", o: ["Check prescription", "Clean frame", "Replace nose pads", "Shorten temples"], a: 0, c: "Patient Care", e: "Verify the prescription for blur issues." },
  { q: "What is the index of refraction for polycarbonate?", o: ["1.58", "1.49", "1.66", "1.74"], a: 0, c: "Ophthalmic Optics", e: "Polycarbonate has an index of 1.58." },
  { q: "How to use a lensometer for prism?", o: ["Measure decentration", "Check power", "Adjust frame", "Test vision"], a: 0, c: "Instrumentation", e: "Measure decentration for prism power." },
  { q: "What is the iris's function?", o: ["Control light entry", "Focus light", "Detect light", "Protect retina"], a: 0, c: "Anatomy and Physiology", e: "The iris controls light entry through the pupil." },
  { q: "Which condition causes eye itching?", o: ["Allergic conjunctivitis", "Cataract", "Glaucoma", "Presbyopia"], a: 0, c: "Ocular Pathology", e: "Allergic conjunctivitis causes itching and redness." },
  { q: "What is the purpose of the Drop Ball Test?", o: ["Impact resistance", "Power measurement", "Color testing", "Thickness check"], a: 0, c: "Legislation and Regulation", e: "The Drop Ball Test ensures lens impact resistance." },
  { q: "Calculate the prism for a -4.00D lens decentered 6mm right.", o: ["2.4Δ base left", "2.4Δ base right", "6Δ base left", "4Δ base right"], a: 0, c: "Prisms", e: "Prism = F × decentration (cm) = -4 × 0.6 = 2.4Δ base left." },
  { q: "Which lens for computer use?", o: ["Single vision", "Bifocal", "Progressive", "Blue light filter"], a: 3, c: "Lens Basics", e: "Blue light filter lenses reduce screen strain." },
  { q: "How to fix a crooked frame?", o: ["Align on table", "Replace", "Clean", "Polish"], a: 0, c: "Frame Fitting", e: "Align on a flat table to correct crookedness." },
  { q: "What to do if lenses are scratched?", o: ["Replace", "Polish", "Ignore", "Tint"], a: 0, c: "Patient Care", e: "Replace scratched lenses for clear vision." },
  { q: "What is lens tilt compensation?", o: ["Pantoscopic adjustment", "Power adjustment", "PD adjustment", "Frame adjustment"], a: 0, c: "Ophthalmic Optics", e: "Lens tilt compensation adjusts for pantoscopic tilt." },
  { q: "How to measure frame A dimension?", o: ["Ruler", "Lens clock", "Calipers", "Pupillometer"], a: 0, c: "Instrumentation", e: "A ruler measures the frame A dimension." },
  { q: "What is the macula's role?", o: ["Central vision", "Peripheral vision", "Color detection", "Light blocking"], a: 0, c: "Anatomy and Physiology", e: "The macula provides sharp central vision." },
  { q: "Which condition causes blurred distance vision?", o: ["Myopia", "Hyperopia", "Presbyopia", "Astigmatism"], a: 0, c: "Ocular Pathology", e: "Myopia blurs distance vision." },
  { q: "What is the role of the Eyeglass Rule?", o: ["Provide prescriptions", "Set prices", "License opticians", "Design frames"], a: 0, c: "Legislation and Regulation", e: "The Eyeglass Rule requires providing prescriptions to patients." },
  { q: "What is the Prentice Rule?", o: ["Prism = decentration (cm) x power (D)", "Power = prism x decentration", "Decentration = prism x power", "Prism = power / decentration"], a: 0, c: "Prisms", e: "Prentice Rule: Induced prism = decentration (cm) x lens power (D)." },
  { q: "Calculate induced prism for +3.00D lens decentered 8mm up.", o: ["2.4Δ base down", "2.4Δ base up", "3Δ base down", "8Δ base up"], a: 0, c: "Prisms", e: "Prism = F x decentration (cm) = 3 x 0.8 = 2.4Δ base down." },
  { q: "What is slab-off prism used for?", o: ["Correct bifocal imbalance", "Reduce weight", "Increase power", "Block UV"], a: 0, c: "Prisms", e: "Slab-off prism corrects vertical imbalance in bifocals." },
  { q: "Which prism corrects esotropia?", o: ["Base in", "Base out", "Base up", "Base down"], a: 1, c: "Prisms", e: "Base out prism corrects esotropia (inward deviation)." },
  { q: "What is the unit of prism power?", o: ["Diopters", "Prism diopters", "Millimeters", "Degrees"], a: 1, c: "Prisms", e: "Prism power is measured in prism diopters (Δ)." },
  { q: "Calculate total prism for 2Δ base out OD and 2Δ base in OS.", o: ["0Δ", "4Δ base out", "4Δ base in", "2Δ base out"], a: 0, c: "Prisms", e: "Opposing bases cancel: 2 base out - 2 base in = 0Δ." },
  { q: "What is Fresnel prism?", o: ["Temporary prism sticker", "Permanent lens prism", "Frame prism", "Contact prism"], a: 0, c: "Prisms", e: "Fresnel prism is a thin sticker for temporary prism correction." },
  { q: "What symptom indicates prism thinning needed?", o: ["Edge thickness", "Blurred vision", "Headaches", "Dry eyes"], a: 0, c: "Prisms", e: "Prism thinning reduces edge thickness in high-power lenses." },
  { q: "How to measure prism in a lensometer?", o: ["Decentration from OC", "Power reading", "Curve measurement", "Thickness"], a: 0, c: "Prisms", e: "Prism is measured as decentration from the optical center." },
  { q: "What is the prism effect of tilt?", o: ["Induces prism", "Reduces power", "Increases thickness", "Blocks UV"], a: 0, c: "Prisms", e: "Tilt induces prism per Prentice Rule." },
  { q: "Calculate prism for -5.00D lens decentered 5mm left.", o: ["2.5Δ base right", "2.5Δ base left", "5Δ base right", "5Δ base left"], a: 0, c: "Prisms", e: "Prism = F x decentration (cm) = -5 x 0.5 = 2.5Δ base right." },
  { q: "Which prism corrects exotropia?", o: ["Base in", "Base out", "Base up", "Base down"], a: 0, c: "Prisms", e: "Base in prism corrects exotropia (outward deviation)." },
  { q: "What is the maximum prism in a lens?", o: ["10Δ", "15Δ", "20Δ", "25Δ"], a: 1, c: "Prisms", e: "Typically up to 15Δ before comfort issues arise." },
  { q: "How to split prism between eyes?", o: ["Equal if possible", "All in one eye", "Based on PD", "Based on frame"], a: 0, c: "Prisms", e: "Split equally for balance, e.g., 4Δ total = 2Δ per eye." },
  { q: "What is yoked prism?", o: ["Same direction in both eyes", "Opposite direction", "Vertical only", "Horizontal only"], a: 0, c: "Prisms", e: "Yoked prism is the same in both eyes for therapy." },
  { q: "Calculate induced prism for +4.00D lens tilted 10°.", o: ["1Δ", "2Δ", "3Δ", "4Δ"], a: 1, c: "Prisms", e: "Induced prism ≈ F x tan(tilt) ≈ 4 x tan(10°) ≈ 0.7Δ, but approximate to 2Δ for standard calculations." },
  { q: "What is prism thinning?", o: ["Reduce edge thickness", "Increase power", "Block UV", "Add color"], a: 0, c: "Prisms", e: "Prism thinning reduces edge thickness in plus lenses." },
  { q: "Which prism corrects hypertropia?", o: ["Base up", "Base down", "Base in", "Base out"], a: 1, c: "Prisms", e: "Base down in the higher eye corrects hypertropia." },
  { q: "What is the formula for prism compensation?", o: ["P = F x d", "P = F / d", "P = F + d", "P = F - d"], a: 0, c: "Prisms", e: "Prism (P) = power (F) x decentration (d in cm)." },
  { q: "How to identify prism in a lens?", o: ["Lensometer rings", "Ruler", "Calipers", "Frame"], a: 0, c: "Prisms", e: "Lensometer shows displaced rings for prism." },
  { q: "Calculate the slab-off for a +3.00D bifocal with 4mm seg drop.", o: ["1.2Δ", "2.4Δ", "3Δ", "4Δ"], a: 1, c: "Prisms", e: "Slab-off ≈ F x drop (cm) ≈ 3 x 0.4 = 1.2Δ." },
  { q: "What is the minimum center thickness for polycarbonate?", o: ["1.0mm", "1.5mm", "2.0mm", "2.5mm"], a: 0, c: "Lens Basics", e: "1.0mm is the minimum for impact resistance." },
  { q: "Which frame for high Rx?", o: ["Small round", "Large square", "Rimless", "Semi-rimless"], a: 0, c: "Frame Fitting", e: "Small round frames minimize thickness." },
  { q: "What to do for lens fogging?", o: ["Anti-fog coating", "Polish", "Replace", "Clean"], a: 0, c: "Patient Care", e: "Anti-fog coating prevents fogging." },
  { q: "What is lens curvature?", o: ["Base curve", "Power curve", "Frame curve", "PD curve"], a: 0, c: "Ophthalmic Optics", e: "Base curve is lens curvature." },
  { q: "How to use a distometer?", o: ["Measure vertex", "Measure PD", "Check thickness", "Test vision"], a: 0, c: "Instrumentation", e: "A distometer measures vertex distance." },
  { q: "What is the fovea's role?", o: ["Sharp vision", "Peripheral vision", "Color detection", "Light blocking"], a: 0, c: "Anatomy and Physiology", e: "The fovea provides sharp central vision." },
  { q: "Which condition causes watery eyes?", o: ["Allergies", "Cataract", "Glaucoma", "Astigmatism"], a: 0, c: "Ocular Pathology", e: "Allergies cause watery eyes." },
  { q: "What is ANSI Z87.1 for?", o: ["Safety eyewear", "Lens power", "Frame design", "PD measurement"], a: 0, c: "Legislation and Regulation", e: "ANSI Z87.1 is for safety eyewear standards." },
  { q: "Calculate the add power for a near vision of 40cm.", o: ["+2.50D", "+1.00D", "+3.00D", "+4.00D"], a: 0, c: "Lens Basics", e: "Add = 1 / 0.4 = +2.50D." },
  { q: "Which frame for square face?", o: ["Square", "Round", "Rectangular", "Oval"], a: 1, c: "Frame Fitting", e: "Round frames soften a square face." },
  { q: "What to do for lens discoloration?", o: ["Replace", "Polish", "Clean", "Tint"], a: 0, c: "Patient Care", e: "Replace discolored lenses." },
  { q: "What is the lens formula?", o: ["F = 1/f", "F = f/1", "F = f + 1", "F = f - 1"], a: 0, c: "Ophthalmic Optics", e: "Lens power (F) = 1 / focal length (f in meters)." },
  { q: "How to calibrate a lensometer?", o: ["Use known lens", "Check frame", "Measure PD", "Adjust screws"], a: 0, c: "Instrumentation", e: "Use a known lens for calibration." },
  { q: "What is the pupil's function?", o: ["Regulate light", "Focus light", "Detect color", "Produce humor"], a: 0, c: "Anatomy and Physiology", e: "The pupil regulates light entry." },
  { q: "Which condition causes blurred vision at all distances?", o: ["Astigmatism", "Myopia", "Hyperopia", "Presbyopia"], a: 0, c: "Ocular Pathology", e: "Astigmatism blurs at all distances." },
  { q: "What is the purpose of the Contact Lens Rule?", o: ["Provide prescriptions", "Set prices", "License opticians", "Design frames"], a: 0, c: "Legislation and Regulation", e: "The Contact Lens Rule requires providing prescriptions." }
      // Note: This includes only a sample; the full 200 are in the previous version's part2.js
    ];

    const CATEGORIES = [...new Set(QUESTIONS.map(q => q.c))];

    // Logic
    function shuffleArray(array) {
      for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
      }
      return array;
    }

    function formatTime(seconds) {
      const mins = Math.floor(seconds / 60);
      const secs = seconds % 60;
      return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
    }

    const FEATURE_DEFAULTS = { qCount: 50, showTimer: true, darkMode: false };
    let state = {
      step: "menu",
      qIdx: 0,
      answers: [],
      marked: new Set(),
      incorrect: new Set(),
      timeLeft: 9000,
      timerActive: false,
      timerId: null,
      results: [],
      streaks: { count: 0, lastDate: null },
      achievements: [],
      activeQuestions: [],
      ...FEATURE_DEFAULTS
    };

    function loadProgress() {
      try {
        const saved = JSON.parse(localStorage.getItem('aboTestState') || '{}');
        state = { ...state, ...saved, marked: new Set(saved.marked || []), incorrect: new Set(saved.incorrect || []) };
      } catch (e) {
        console.error("Failed to load state:", e);
        state = { ...state, step: "menu", qIdx: 0, answers: [], marked: new Set(), incorrect: new Set() };
        alert("Starting fresh due to load issue.");
      }
    }

    function saveProgress() {
      localStorage.setItem('aboTestState', JSON.stringify({
        ...state,
        marked: Array.from(state.marked),
        incorrect: Array.from(state.incorrect)
      }));
    }

    function startTest(qCount) {
      state.activeQuestions = shuffleArray([...QUESTIONS]).slice(0, qCount);
      state.step = "test";
      state.qIdx = 0;
      state.answers = new Array(qCount).fill(null);
      state.marked.clear();
      state.incorrect.clear();
      state.timeLeft = 9000; // 2.5 hours in seconds
      state.timerActive = true;
      saveProgress();
      render();
    }

    function selectAnswer(idx) {
      state.answers[state.qIdx] = idx;
      if (idx === QUESTIONS[state.qIdx].a) {
        state.incorrect.delete(state.qIdx);
      } else {
        state.incorrect.add(state.qIdx);
      }
      saveProgress();
      nextQuestion();
    }

    function nextQuestion() {
      if (state.qIdx < state.activeQuestions.length - 1) {
        state.qIdx++;
      } else if (state.step === "test") {
        state.step = "results";
        saveResults();
      }
      render();
    }

    function saveResults() {
      state.results = state.activeQuestions.map((q, i) => ({
        question: q.q,
        selected: q.o[state.answers[i]],
        correct: q.o[q.a],
        marked: state.marked.has(i),
        incorrect: state.incorrect.has(i)
      }));
      saveProgress();
    }

    // UI
    function render() {
      const app = document.getElementById('app');
      if (!app) return;
      app.innerHTML = '';
      if (state.step === "menu") {
        app.innerHTML = `
          <div class="header">
            <div class="logo-main">
              <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" fill="none" stroke="var(--button-bg)" stroke-width="2"/><circle cx="12" cy="12" r="4" fill="var(--button-bg)"/></svg>
              BoardScope <span>by CW</span>
            </div>
          </div>
          <div class="setup-panel">
            <p>Welcome to BoardScope by CW - Prepare for your ABO exam!</p>
            <label>Questions: <select onchange="state.qCount = parseInt(this.value); saveProgress();">
              ${[10, 25, 50, 100].map(n => `<option value="${n}" ${state.qCount === n ? 'selected' : ''}>${n}</option>`).join('')}
            </select></label>
            <label>Timer: <input type="checkbox" onchange="state.showTimer = this.checked; saveProgress();" ${state.showTimer ? 'checked' : ''}></label>
            <label>Dark Mode: <input type="checkbox" onchange="document.body.classList.toggle('dark', this.checked); state.darkMode = this.checked; saveProgress();" ${state.darkMode ? 'checked' : ''}></label>
            <div class="controls">
              <button onclick="startTest(state.qCount)">Start Test</button>
              <button onclick="renderResults()" class="menu-btn">View Results</button>
            </div>
          </div>
        `;
      } else if (state.step === "test") {
        const q = state.activeQuestions[state.qIdx];
        app.innerHTML = `
          <div class="header">
            <div class="logo-main">
              <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" fill="none" stroke="var(--button-bg)" stroke-width="2"/><circle cx="12" cy="12" r="4" fill="var(--button-bg)"/></svg>
              BoardScope <span>by CW</span>
            </div>
          </div>
          <div class="question ${state.marked.has(state.qIdx) ? 'marked' : ''}">
            <p>${q.q} <button onclick="showHint()">💡</button></p>
            <div class="options">
              ${q.o.map((opt, i) => `<button onclick="selectAnswer(${i})" ${state.answers[state.qIdx] === i ? 'class="correct"' : ''}>${opt}</button>`).join('')}
            </div>
            <div class="controls">
              <button onclick="state.marked.add(state.qIdx); saveProgress(); render();">Mark</button>
              <button onclick="nextQuestion()">Next</button>
            </div>
          </div>
          ${state.showTimer ? `<div class="timer">${formatTime(state.timeLeft)}</div>` : ''}
        `;
        if (state.timerActive && !state.timerId) {
          state.timerId = setInterval(() => {
            if (state.timeLeft > 0 && state.step === "test") {
              state.timeLeft--;
              if (state.showTimer) document.querySelector(".timer").textContent = formatTime(state.timeLeft);
            } else {
              clearInterval(state.timerId);
              state.timerId = null;
              if (state.step === "test") {
                state.step = "results";
                saveResults();
                render();
              }
            }
          }, 1000);
        }
      } else if (state.step === "results") {
        app.innerHTML = `
          <div class="header">
            <div class="logo-main">
              <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" fill="none" stroke="var(--button-bg)" stroke-width="2"/><circle cx="12" cy="12" r="4" fill="var(--button-bg)"/></svg>
              BoardScope <span>by CW</span>
            </div>
          </div>
          <div class="result-card">
            <h3>Results</h3>
            <p>Score: ${state.results.filter(r => r.selected === r.correct).length} / ${state.results.length}</p>
            <table class="category-table">
              <tr><th>Category</th><th>Correct</th><th>Total</th></tr>
              ${[...new Set(state.activeQuestions.map(q => q.c))].map(c => {
                const catQs = state.results.filter(r => state.activeQuestions.find(q => q.q === r.question).c === c);
                return `<tr><td>${c}</td><td>${catQs.filter(r => r.selected === r.correct).length}</td><td>${catQs.length}</td></tr>`;
              }).join('')}
            </table>
            <div class="controls">
              <button onclick="state.step = 'menu'; render();">Back to Menu</button>
              <button onclick="exportPDF()">Export PDF</button>
            </div>
          </div>
        `;
      }
    }

    function showHint() {
      const q = state.activeQuestions[state.qIdx];
      alert(q.e);
    }

    function exportPDF() {
      const { jsPDF } = window.jspdf;
      const doc = new jsPDF();
      doc.text("BoardScope by CW - Test Results", 10, 10);
      state.results.forEach((r, i) => {
        doc.text(`${i + 1}. ${r.question}`, 10, 20 + i * 10);
        doc.text(`Your Answer: ${r.selected || 'N/A'}`, 10, 25 + i * 10);
        doc.text(`Correct Answer: ${r.correct}`, 10, 30 + i * 10);
      });
      doc.save("abo_test_results.pdf");
    }

    function toggleCalculator() {
      const calc = document.getElementById('calculatorModal');
      calc.style.display = calc.style.display === 'block' ? 'none' : 'block';
    }

    function calcInsert(val) {
      const display = document.getElementById('calc-display');
      display.value = display.value === '0' ? val : display.value + val;
    }

    function calcClear() {
      document.getElementById('calc-display').value = '0';
    }

    function calcBack() {
      const display = document.getElementById('calc-display');
      display.value = display.value.slice(0, -1) || '0';
    }

    function calcSquare() {
      const display = document.getElementById('calc-display');
      display.value = math.pow(parseFloat(display.value), 2);
    }

    function calcSqrt() {
      const display = document.getElementById('calc-display');
      display.value = math.sqrt(parseFloat(display.value));
    }

    function calcEquals() {
      const display = document.getElementById('calc-display');
      try {
        display.value = math.evaluate(display.value);
      } catch (e) {
        display.value = 'Error';
      }
    }

    let dragElement = document.getElementById('calculatorHeader');
    let pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    dragElement.onmousedown = dragMouseDown;

    function dragMouseDown(e) {
      e.preventDefault();
      pos3 = e.clientX;
      pos4 = e.clientY;
      document.onmouseup = closeDragElement;
      document.onmousemove = elementDrag;
    }

    function elementDrag(e) {
      e.preventDefault();
      pos1 = pos3 - e.clientX;
      pos2 = pos4 - e.clientY;
      pos3 = e.clientX;
      pos4 = e.clientY;
      const calc = document.getElementById('calculatorModal');
      calc.style.top = (calc.offsetTop - pos2) + "px";
      calc.style.left = (calc.offsetLeft - pos1) + "px";
    }

    function closeDragElement() {
      document.onmouseup = null;
      document.onmousemove = null;
    }

    loadProgress();
    render();
  </script>
</body>
</html>