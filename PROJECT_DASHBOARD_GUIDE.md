# Project Dashboard Guide

**Status:** Standard Guideline  
**Scope:** All repositories and projects  
**Purpose:** Consistent design and structure of project dashboards

---

## 1. Σκοπός

Κάθε project που διαθέτει web dashboard, landing page, project status page ή άλλο βασικό user interface πρέπει να ακολουθεί κοινή σχεδιαστική λογική.

Στόχος είναι όλα τα projects να έχουν:

- αναγνωρίσιμη κοινή ταυτότητα,
- καθαρή και απλή πλοήγηση,
- σταθερή λογική Header και Footer,
- άμεση πρόσβαση στις σημαντικότερες πληροφορίες,
- σαφή ταυτοποίηση έκδοσης,
- απλό και λειτουργικό interface χωρίς περιττή πολυπλοκότητα.

Το dashboard πρέπει να δίνει στον χρήστη μέσα σε λίγα δευτερόλεπτα απάντηση στα εξής:

1. Σε ποιο project βρίσκομαι;
2. Τι μπορώ να κάνω εδώ;
3. Ποια είναι η τρέχουσα κατάσταση του project;
4. Πού βρίσκονται οι βασικές ενότητες;
5. Ποια έκδοση βλέπω;
6. Πώς επιστρέφω στο κεντρικό ecosystem;

## 2. Βασική σχεδιαστική αρχή

Το dashboard πρέπει να είναι:

- απλό,
- καθαρό,
- ευανάγνωστο,
- responsive,
- γρήγορο,
- χωρίς περιττά visual effects,
- χωρίς υπερβολική πληροφορία στην αρχική οθόνη.

Η αρχική σελίδα δεν πρέπει να μετατρέπεται σε πολύπλοκο administration dashboard εφόσον δεν υπάρχει πραγματική ανάγκη.

Προτιμάται η λογική:

**Header → Main Content → Footer**

με περιορισμένο αριθμό κύριων επιλογών.

## 3. Header — Υποχρεωτική κοινή λογική

Το Header αποτελεί βασικό στοιχείο ταυτότητας και πρέπει να ακολουθεί παρόμοια δομή σε όλα τα projects.

### 3.1 Project Identity

Στην αριστερή πλευρά:

#### Μικρό project / ecosystem label

Παράδειγμα:

`ENGINEERING PROJECT`

`STUDY PLATFORM`

`HEALTH & SAFETY SYSTEM`

`PROJECT MANAGEMENT TOOL`

Το label πρέπει να είναι μικρότερο από τον κύριο τίτλο και να λειτουργεί ως κατηγορία του project.

#### Κύριος τίτλος

Ακριβώς κάτω από το label εμφανίζεται καθαρά το όνομα του project.

Παράδειγμα:

`Parking Canopy Design`

`Study App`

`Health & Safety App`

Ο τίτλος πρέπει να είναι το κυρίαρχο στοιχείο του Header.

### 3.2 Main Navigation

Κάτω ή δίπλα από την ταυτότητα του project εμφανίζεται το βασικό navigation.

Το navigation πρέπει να περιλαμβάνει μόνο τις κύριες λειτουργίες.

Παράδειγμα:

`Home | Site | Design | Calculations | Tender | Documents`

ή:

`Home | Sources | Practice | AI Studio | Important Info`

Δεν πρέπει να δημιουργούνται πολλές επιλογές πρώτου επιπέδου. Δευτερεύουσες λειτουργίες μπορούν να τοποθετούνται μέσα στις αντίστοιχες ενότητες.

### 3.3 Utility Area

Στη δεξιά πλευρά του Header μπορούν να υπάρχουν, ανάλογα με το project:

- γλώσσα,
- Settings,
- Feedback,
- AI Assistant,
- user/account information,
- project-specific utilities.

Οι επιλογές αυτές πρέπει να είναι οπτικά δευτερεύουσες σε σχέση με το project navigation.

### 3.4 Back to Ecosystem

Όπου είναι κατάλληλο, το Header πρέπει να περιλαμβάνει εμφανή σύνδεσμο:

**Back to markellosecosystem**

ή αντίστοιχη ονομασία του κεντρικού ecosystem.

Ο σύνδεσμος αυτός πρέπει να βρίσκεται κατά προτίμηση στη δεξιά πλευρά του Header.

Σκοπός είναι όλα τα ανεξάρτητα projects να παραμένουν οπτικά και λειτουργικά συνδεδεμένα με το συνολικό ecosystem.

## 4. Main Content

Η αρχική σελίδα πρέπει να παρουσιάζει μόνο τις σημαντικότερες λειτουργίες ή πληροφορίες.

Προτιμάται η χρήση **μεγάλων καθαρών cards**.

Κάθε card πρέπει να έχει:

- μικρό category label, όπου χρειάζεται,
- σαφή τίτλο,
- σύντομη περιγραφή,
- μία ή δύο βασικές ενέργειες.

Παράδειγμα:

### SITE & LAYOUT

#### Site Data

View parcels, parking layouts, access points and existing conditions.

`Open Site Data`

Δεν πρέπει να δημιουργούνται cards μόνο για αισθητικούς λόγους. Κάθε card πρέπει να αντιπροσωπεύει πραγματική ενότητα ή workflow.

## 5. Project Dashboard / Status

Όπου το project εξελίσσεται σε φάσεις, πρέπει να υπάρχει πολύ απλή ένδειξη κατάστασης.

Ενδεικτικές καταστάσεις:

- ✅ Confirmed
- 🟡 In Progress
- ⏳ Next
- ⬜ Pending
- ⚠️ To Be Confirmed

Δεν απαιτούνται περίπλοκα charts όταν ένας απλός πίνακας ή λίστα αρκεί.

Το dashboard πρέπει να δείχνει κατά προτίμηση:

- Current Phase
- Current Status
- Next Action
- Open Items

Παράδειγμα:

**Current Phase:** Preliminary Design  
**Next Action:** Typical Γ / Τ canopy geometry  
**Open Items:** Fabric properties, soil verification

## 6. Footer — Υποχρεωτική κοινή λογική

Το Footer αποτελεί μόνιμο μέρος της ταυτότητας όλων των projects και πρέπει να βρίσκεται στο κάτω μέρος κάθε κύριας σελίδας.

### 6.1 Copyright

Να εμφανίζεται:

`© [YEAR] Markellos Markides. All rights reserved.`

Το έτος μπορεί να ενημερώνεται αυτόματα.

### 6.2 Legal / Information Links

Όπου εφαρμόζεται μπορούν να υπάρχουν:

- License
- Privacy
- Analytics choices
- Copyright protected
- Terms
- Documentation

Δεν χρειάζεται όλα τα projects να έχουν όλα τα links. Προστίθενται μόνο όσα έχουν πραγματική χρήση.

### 6.3 Version Identification

Στο Footer πρέπει **πάντα** να εμφανίζεται η έκδοση του project/dashboard.

Προτεινόμενη μορφή:

`v1.2.0`

Για projects που συνδέονται με Git:

`v1.2.0_20260827_a1b2c3d`

όπου:

- `1.2.0` = semantic version,
- `20260827` = ημερομηνία build/release,
- `a1b2c3d` = short Git commit SHA.

Η version information πρέπει να είναι διακριτική αλλά πάντοτε ορατή.

## 7. Git / Build Identification

Όπου το dashboard παράγεται από Git repository, προτιμάται η αυτόματη εισαγωγή:

- app/project version,
- build date,
- short commit SHA.

Στόχος είναι από οποιοδήποτε screenshot, bug report, test, deployment ή audit να μπορεί να προσδιοριστεί ακριβώς ποια έκδοση του project εμφανίζεται.

Δεν πρέπει να χρησιμοποιείται χειροκίνητο commit SHA όταν μπορεί να παράγεται αυτόματα κατά το build/deployment.

## 8. Visual Identity

Κάθε project μπορεί να έχει δικά του:

- accent colours,
- icons,
- imagery,
- domain-specific visual elements.

Ωστόσο πρέπει να διατηρείται η κοινή λογική:

- καθαρό Header,
- σαφής project title,
- απλό navigation,
- cards με αρκετό whitespace,
- καθαρή τυπογραφική ιεραρχία,
- διακριτικό Footer,
- version identification.

Η συνέπεια της δομής είναι σημαντικότερη από την απόλυτη ομοιομορφία χρωμάτων.

## 9. Typography

Η ιεραρχία πρέπει να είναι σαφής:

1. Project title
2. Page title
3. Section / card title
4. Body text
5. Metadata / labels / version

Αποφεύγονται:

- υπερβολικά πολλά font sizes,
- πολλά διαφορετικά fonts,
- περιττά bold στοιχεία,
- μεγάλα blocks κεφαλαίων.

Τα uppercase labels επιτρέπονται κυρίως για μικρές κατηγορίες όπως:

`ENGINEERING PROJECT`

`CURRENT STATUS`

`DESIGN`

## 10. Responsive Behaviour

Το Header, το περιεχόμενο και το Footer πρέπει να λειτουργούν σωστά σε:

- desktop,
- laptop,
- tablet,
- mobile.

Σε μικρές οθόνες:

- τα navigation items μπορούν να μεταφέρονται σε menu,
- τα cards γίνονται μονή στήλη,
- utility controls αναδιατάσσονται,
- δεν πρέπει να δημιουργείται οριζόντιο scrolling.

Η βασική πληροφορία του project πρέπει να παραμένει άμεσα ορατή.

## 11. Accessibility

Τα dashboards πρέπει να χρησιμοποιούν:

- επαρκή contrast,
- semantic HTML,
- σωστά headings,
- keyboard-accessible navigation,
- σαφή focus states,
- labels στα controls,
- κατάλληλα alt texts για ουσιαστικές εικόνες.

Η αισθητική δεν πρέπει να μειώνει τη χρηστικότητα.

## 12. Αποφυγή υπερβολικής πολυπλοκότητας

Δεν προστίθενται χωρίς πραγματικό λόγο:

- animations,
- dashboards με δεκάδες metrics,
- complex charts,
- carousel components,
- nested menus,
- floating widgets,
- visual effects,
- glassmorphism,
- excessive shadows,
- decorative gradients,
- unnecessary JavaScript.

Η απλότητα αποτελεί βασική απαίτηση.

## 13. Recommended Home Layout

Τυπική δομή:

```text
┌─────────────────────────────────────────────────┐
│ PROJECT LABEL                     Utilities     │
│ Project Name                  Back to Ecosystem │
│                                                 │
│ Home | Section | Section | Section | Documents  │
└─────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────┐
│                                                 │
│   Main Card      Main Card      Main Card       │
│                                                 │
│   Description    Description    Description     │
│                                                 │
│   Action         Action         Action          │
│                                                 │
└─────────────────────────────────────────────────┘

              Current Phase / Status

───────────────────────────────────────────────────

      © 2026 Markellos Markides.
      License | Privacy | Copyright protected

                         v1.0.0_YYYYMMDD_SHA
```

## 14. Repository Integration

Κάθε repository με dashboard πρέπει, όπου είναι πρακτικό, να περιλαμβάνει αναφορά σε αυτόν τον οδηγό.

Το project-specific `AGENTS.md` ή development documentation πρέπει να αναφέρει ότι:

> Any project dashboard, landing page or main web interface must follow `PROJECT_DASHBOARD_GUIDE.md` unless a documented project-specific requirement justifies a deviation.

## 15. Επιτρεπόμενες αποκλίσεις

Ο οδηγός καθορίζει **κοινή φιλοσοφία**, όχι απόλυτα ίδιο UI.

Ένα project μπορεί να αποκλίνει όταν:

- το domain απαιτεί διαφορετική διάταξη,
- υπάρχουν ειδικές accessibility απαιτήσεις,
- υπάρχει σημαντικός λειτουργικός λόγος,
- διαφορετικό UI βελτιώνει ουσιαστικά τη χρήση.

Η απόκλιση πρέπει να είναι συνειδητή και όχι αποτέλεσμα ασυνέπειας.

Τα ακόλουθα όμως θεωρούνται σταθερές αρχές:

- σαφής project identity,
- σταθερή λογική Header,
- σύνδεση με το ecosystem όπου απαιτείται,
- απλό navigation,
- καθαρό Main Content,
- σταθερή λογική Footer,
- copyright information,
- version/build identification.

## 16. Τελική αρχή

Κάθε dashboard πρέπει να φαίνεται ότι αποτελεί μέρος της ίδιας οικογένειας projects χωρίς να χάνει τη δική του ταυτότητα.

**Η κοινή ταυτότητα προκύπτει κυρίως από τη δομή, το Header, το Footer, την πλοήγηση και την πειθαρχία στην απλότητα — όχι από την αντιγραφή του ίδιου ακριβώς design σε κάθε project.**
