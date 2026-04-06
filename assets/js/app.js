
// Template configurations
const quoteTemplates = {
    apartment: {
        name: 'Modern Apartment Package',
        description: 'Perfect for 1-2 bedroom apartments and units',
        total: 3450,
        hours: 4,
        rooms: [
            {
                name: 'Living Room',
                items: [
                    { name: '3-Seater Sofa', price: 899, dimensions: '200cm W x 85cm D' },
                    { name: 'Coffee Table', price: 299, dimensions: '120cm W x 60cm D' },
                    { name: 'Media Console', price: 349, dimensions: '150cm W x 40cm D' },
                    { name: 'Floor Lamp', price: 159, dimensions: '40cm Base' }
                ]
            },
            {
                name: 'Bedroom',
                items: [
                    { name: 'Queen Bed Frame', price: 699, dimensions: '160cm W x 210cm L' },
                    { name: 'Nightstands (Set of 2)', price: 299, dimensions: '50cm W x 40cm D each' },
                    { name: 'Dresser', price: 449, dimensions: '120cm W x 50cm D' }
                ]
            },
            {
                name: 'Dining Area',
                items: [
                    { name: 'Dining Table (4-seat)', price: 399, dimensions: '140cm W x 80cm D' },
                    { name: 'Dining Chairs (Set of 4)', price: 399, dimensions: '45cm W x 50cm D each' }
                ]
            }
        ]
    },
    
    house: {
        name: 'Complete House Package',
        description: 'Full staging for 3-4 bedroom homes',
        total: 8890,
        hours: 8,
        rooms: [
            {
                name: 'Living Room',
                items: [
                    { name: 'Large Sectional Sofa', price: 1499, dimensions: '280cm W x 180cm D' },
                    { name: 'Marble Coffee Table', price: 449, dimensions: '130cm W x 70cm D' },
                    { name: 'Side Tables (Set of 2)', price: 398, dimensions: '60cm W x 60cm D each' },
                    { name: 'Large Area Rug', price: 399, dimensions: '230cm x 160cm' },
                    { name: 'Entertainment Unit', price: 599, dimensions: '200cm W x 45cm D' },
                    { name: 'Floor Lamps (Set of 2)', price: 299, dimensions: '50cm Base each' }
                ]
            },
            {
                name: 'Dining Room',
                items: [
                    { name: 'Dining Table (6-8 seat)', price: 699, dimensions: '200cm W x 100cm D' },
                    { name: 'Dining Chairs (Set of 6)', price: 899, dimensions: '50cm W x 55cm D each' },
                    { name: 'Sideboard', price: 499, dimensions: '180cm W x 45cm D' }
                ]
            },
            {
                name: 'Master Bedroom',
                items: [
                    { name: 'King Bed Frame', price: 1299, dimensions: '180cm W x 210cm L' },
                    { name: 'Nightstands (Set of 2)', price: 299, dimensions: '60cm W x 45cm D each' },
                    { name: 'Dresser', price: 599, dimensions: '160cm W x 50cm D' },
                    { name: 'Armchair', price: 349, dimensions: '70cm W x 75cm D' }
                ]
            },
            {
                name: 'Guest Bedroom',
                items: [
                    { name: 'Queen Bed Frame', price: 799, dimensions: '160cm W x 210cm L' },
                    { name: 'Nightstand', price: 149, dimensions: '50cm W x 40cm D' },
                    { name: 'Chest of Drawers', price: 349, dimensions: '90cm W x 45cm D' }
                ]
            },
            {
                name: 'Home Office',
                items: [
                    { name: 'Desk', price: 399, dimensions: '150cm W x 70cm D' },
                    { name: 'Office Chair', price: 249, dimensions: '65cm W x 65cm D' },
                    { name: 'Bookshelf', price: 299, dimensions: '90cm W x 30cm D' }
                ]
            }
        ]
    },
    
    luxury: {
        name: 'Luxury Collection',
        description: 'Premium designer pieces for high-end properties',
        total: 16450,
        hours: 12,
        rooms: [
            {
                name: 'Grand Living Room',
                items: [
                    { name: 'Designer Sectional (Velvet)', price: 2499, dimensions: '320cm W x 200cm D' },
                    { name: 'Marble Coffee Table', price: 899, dimensions: '140cm W x 80cm D' },
                    { name: 'Luxury Area Rug', price: 899, dimensions: '300cm x 200cm' },
                    { name: 'Crystal Chandelier', price: 1299, dimensions: '80cm Diameter' },
                    { name: 'Designer Lounge Chairs (Set of 2)', price: 1599, dimensions: '85cm W x 90cm D each' },
                    { name: 'Original Artwork', price: 1499, dimensions: '120cm x 90cm' }
                ]
            },
            {
                name: 'Formal Dining',
                items: [
                    { name: 'Extended Dining Table', price: 1899, dimensions: '240cm W x 110cm D' },
                    { name: 'Designer Chairs (Set of 8)', price: 2399, dimensions: '55cm W x 60cm D each' },
                    { name: 'Credenza', price: 1299, dimensions: '200cm W x 50cm D' }
                ]
            },
            {
                name: 'Master Suite',
                items: [
                    { name: 'King Bed (Upholstered)', price: 2499, dimensions: '200cm W x 220cm L' },
                    { name: 'Luxury Nightstands (Set of 2)', price: 899, dimensions: '70cm W x 50cm D each' },
                    { name: 'Dresser', price: 1299, dimensions: '180cm W x 55cm D' },
                    { name: 'Chaise Lounge', price: 999, dimensions: '160cm W x 70cm D' },
                    { name: 'Vanity Set', price: 899, dimensions: '120cm W x 45cm D' }
                ]
            },
            {
                name: 'Guest Bedroom',
                items: [
                    { name: 'Queen Bed (Upholstered)', price: 1599, dimensions: '170cm W x 220cm L' },
                    { name: 'Nightstands (Set of 2)', price: 699, dimensions: '60cm W x 45cm D each' },
                    { name: 'Armoire', price: 1299, dimensions: '120cm W x 60cm D' }
                ]
            }
        ]
    },
    
    commercial: {
        name: 'Commercial Package',
        description: 'Professional office and retail spaces',
        total: 12890,
        hours: 10,
        rooms: [
            {
                name: 'Reception Area',
                items: [
                    { name: 'Reception Desk', price: 1899, dimensions: '200cm W x 80cm D' },
                    { name: 'Guest Chairs (Set of 4)', price: 899, dimensions: '65cm W x 70cm D each' },
                    { name: 'Coffee Table', price: 399, dimensions: '100cm W x 60cm D' },
                    { name: 'Magazine Rack', price: 199, dimensions: '80cm W x 30cm D' }
                ]
            },
            {
                name: 'Office Space',
                items: [
                    { name: 'Executive Desk', price: 899, dimensions: '180cm W x 80cm D' },
                    { name: 'Executive Chair', price: 599, dimensions: '70cm W x 70cm D' },
                    { name: 'Bookshelf', price: 499, dimensions: '120cm W x 35cm D' },
                    { name: 'Filing Cabinet', price: 349, dimensions: '50cm W x 60cm D' }
                ]
            },
            {
                name: 'Conference Room',
                items: [
                    { name: 'Conference Table', price: 1499, dimensions: '300cm W x 120cm D' },
                    { name: 'Conference Chairs (Set of 8)', price: 1599, dimensions: '60cm W x 65cm D each' },
                    { name: 'Credenza', price: 899, dimensions: '200cm W x 50cm D' }
                ]
            }
        ]
    }
};

// Preview template function
function previewTemplate(type) {
    const template = quoteTemplates[type];
    const modal = document.getElementById('templatePreviewModal');
    const content = document.getElementById('templatePreviewContent');
    
    let roomsHtml = '';
    template.rooms.forEach((room, index) => {
        let itemsHtml = '';
        room.items.forEach(item => {
            itemsHtml += `
                <div class="template-item-row">
                    <div>
                        <span class="template-item-name">${item.name}</span>
                        <small style="color: #666; display: block; font-size: 0.6rem;">${item.dimensions}</small>
                    </div>
                    <span class="template-item-price">$${item.price.toLocaleString()}</span>
                </div>
            `;
        });
        
        const roomTotal = room.items.reduce((sum, item) => sum + item.price, 0);
        
        roomsHtml += `
            <div class="template-room-item">
                <div class="template-room-header" onclick="toggleRoomItems(${index})">
                    <h4>${room.name}</h4>
                    <span style="color: var(--primary);">$${roomTotal.toLocaleString()}</span>
                </div>
                <div class="template-room-items" id="room-${index}">
                    ${itemsHtml}
                </div>
            </div>
        `;
    });
    
    content.innerHTML = `
        <h2 style="color: var(--primary); margin-top: 0;">${template.name}</h2>
        <p style="color: #666; font-size: 0.8rem;">${template.description}</p>
        <p style="color: #666; font-size: 0.7rem;"><i class="fa fa-clock"></i> Estimated setup: ${template.hours} hours</p>
        
        <div class="template-room-list">
            ${roomsHtml}
        </div>
        
        <div class="template-total">
            <span style="color: #666;">Package Total:</span>
            <span class="amount">$${template.total.toLocaleString()}</span>
        </div>
        
        <div class="template-actions">
            <button class="btn-primary" style="flex: 1;" onclick="alert('Template applied! You can now add these items to your rooms.')">
                <i class="fa fa-check"></i> USE THIS PACKAGE
            </button>
        </div>
    `;
    
    modal.classList.add('active');
}

// Toggle room items in preview
function toggleRoomItems(index) {
    const element = document.getElementById(`room-${index}`);
    if (element) {
        element.classList.toggle('show');
    }
}

// Close template preview
function closeTemplatePreview() {
    document.getElementById('templatePreviewModal').classList.remove('active');
}

// Furniture size recommendations (adds to existing rooms)
function enhanceRoomWithSizeGuide() {
    // Add click handlers to dimension badges
    document.querySelectorAll('.room-dimensions-badge').forEach(badge => {
        badge.addEventListener('click', function() {
            const roomCard = this.closest('.room-card');
            const widthInput = roomCard.querySelector('input[placeholder="Width (m)"]');
            const depthInput = roomCard.querySelector('input[placeholder="Depth (m)"]');
            
            if (widthInput && depthInput) {
                widthInput.focus();
            }
        });
    });
    
    // Add input listeners for dimension changes
    document.querySelectorAll('.room-dimensions input').forEach(input => {
        input.addEventListener('input', function() {
            const roomCard = this.closest('.room-card');
            const width = parseFloat(roomCard.querySelector('input[placeholder="Width (m)"]').value) || 0;
            const depth = parseFloat(roomCard.querySelector('input[placeholder="Depth (m)"]').value) || 0;
            const roomTitle = roomCard.querySelector('.room-title').textContent.toLowerCase();
            
            if (width > 0 && depth > 0) {
                showRoomFurnitureGuide(roomCard, roomTitle, width, depth);
            }
        });
    });
}

function showRoomFurnitureGuide(roomCard, roomType, width, depth) {
    // Remove existing guide
    const existingGuide = roomCard.querySelector('.furniture-guide');
    if (existingGuide) existingGuide.remove();
    
    const recommendations = getFurnitureSizeRecs(roomType, width, depth);
    
    let guideHtml = `
        <div class="furniture-guide">
            <h4><i class="fa fa-ruler"></i> RECOMMENDED SIZES (${width}m x ${depth}m)</h4>
            <div class="furniture-size-card">
    `;
    
    recommendations.forEach(item => {
        const fitClass = item.fit === 'perfect' ? 'fit-perfect' : 
                        item.fit === 'good' ? 'fit-good' : 
                        item.fit === 'tight' ? 'fit-tight' : 'fit-poor';
        
        guideHtml += `
            <div class="furniture-item-guide">
                <span class="item-name">${item.name}</span>
                <div class="dimensions">${item.recommendedSize}</div>
                <div class="fit-score">
                    <span class="fit-indicator ${fitClass}"></span>
                    ${item.fit.toUpperCase()}
                </div>
            </div>
        `;
    });
    
    guideHtml += `</div></div>`;
    roomCard.insertAdjacentHTML('beforeend', guideHtml);
}

function getFurnitureSizeRecs(roomType, width, depth) {
    const recommendations = [];
    
    if (roomType.includes('living')) {
        const maxSofa = Math.min(width - 0.6, 3);
        recommendations.push({
            name: 'Sofa',
            recommendedSize: `${(maxSofa * 0.8).toFixed(1)}m - ${maxSofa.toFixed(1)}m`,
            fit: maxSofa >= 2.5 ? 'perfect' : maxSofa >= 2 ? 'good' : 'tight'
        });
        recommendations.push({
            name: 'Coffee Table',
            recommendedSize: `${(width * 0.5).toFixed(1)}m x ${(depth * 0.3).toFixed(1)}m`,
            fit: width > 3 ? 'perfect' : 'good'
        });
    } else if (roomType.includes('bedroom')) {
        if (width >= 3.5) {
            recommendations.push({ name: 'Bed', recommendedSize: 'King (193cm x 203cm)', fit: 'perfect' });
        } else if (width >= 3) {
            recommendations.push({ name: 'Bed', recommendedSize: 'Queen (163cm x 203cm)', fit: 'good' });
        } else {
            recommendations.push({ name: 'Bed', recommendedSize: 'Double (138cm x 188cm)', fit: 'tight' });
        }
    } else if (roomType.includes('dining')) {
        const tableWidth = width - 1.8;
        const seats = Math.floor(tableWidth / 0.6) * 2;
        recommendations.push({
            name: 'Dining Table',
            recommendedSize: `${Math.min(tableWidth, 2).toFixed(1)}m x ${(depth - 1.8).toFixed(1)}m`,
            fit: tableWidth >= 1.8 ? 'perfect' : 'good'
        });
        recommendations.push({
            name: 'Seating Capacity',
            recommendedSize: `${Math.max(seats, 4)} people`,
            fit: seats >= 6 ? 'perfect' : seats >= 4 ? 'good' : 'tight'
        });
    }
    
    return recommendations;
}

// Run enhancements when quote section is shown
const originalShowSection = window.showSection;
window.showSection = function(id) {
    if (originalShowSection) originalShowSection(id);
    if (id === 'quote') {
        setTimeout(enhanceRoomWithSizeGuide, 500);
    }
};

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
    // Add dimension badges to existing rooms
    const observer = new MutationObserver(function(mutations) {
        mutations.forEach(function(mutation) {
            if (mutation.addedNodes.length) {
                enhanceRoomWithSizeGuide();
            }
        });
    });
    
    observer.observe(document.getElementById('roomContainer'), { childList: true, subtree: true });
});

// Make functions globally available
window.previewTemplate = previewTemplate;
window.toggleRoomItems = toggleRoomItems;
window.closeTemplatePreview = closeTemplatePreview;

// Job data for detailed views with all requested fields
const jobDetails = {
    job1: {
        id: 'JOB-2026-001',
        address: '24 Leslie Ave, Darwin City',
        agent: 'Ray White - Pascoe Vale',
        client: 'Robert Chen',
        status: 'needs-scheduling',
        value: 8900,
        created: 'Feb 15, 2026',
        scope: 'Full home staging for 3-bedroom house. Living room, dining room, master bedroom, guest bedroom, and home office. Modern coastal theme requested.',
        team: 'Team Alpha',
        crew: 'Mike Johnson (Lead), Sarah Chen, David Park',
        timeline: 'Est. 4 days installation',
        
        // Job address details
        jobAddress: {
            street: '24 Leslie Ave',
            suburb: 'Darwin City',
            state: 'NT',
            postcode: '0800',
            access: 'Rear lane access available. Gate code: 4321. Door code: 2468.',
            parking: 'Street parking available on Leslie Ave. Loading zone 50m away.'
        },
        
        // Pickup address (if different)
        pickupAddress: {
            street: '12 Warehouse Lane',
            suburb: 'Winnellie',
            state: 'NT',
            postcode: '0820',
            access: 'Loading dock available. Must check in at office first.',
            parking: 'Dedicated loading zone at rear of building.'
        },
        
        // Logistics details
        jobDate: 'Feb 20, 2026',
        truckSize: 'Medium Rigid (8T)',
        truckStatus: 'Confirmed - Truck #A-42',
        opsTeam: 'Mike Johnson (Lead), Sarah Chen (Installer), David Park (Driver)',
        opsLead: 'Mike Johnson - 0412 345 678',
        stylist: 'Emma Thompson - 0423 456 789',
        etaWindow: '8:00 AM - 10:00 AM',
        photoDeadline: 'Feb 22, 2026 5:00 PM',
        
        // Items
        items: [
            { name: 'Living Room Package', quantity: 1, sku: 'PKG-LR-001' },
            { name: 'Master Bedroom Suite', quantity: 1, sku: 'PKG-MB-002' },
            { name: 'Guest Bedroom Set', quantity: 1, sku: 'PKG-GB-003' },
            { name: 'Dining Package', quantity: 1, sku: 'PKG-DN-001' },
            { name: 'Home Office Setup', quantity: 1, sku: 'PKG-OF-001' }
        ],
        
        specialRequirements: 'Client requests dark wood finishes only. No leather. Access via rear lane with limited parking. Stairs are narrow (85cm width). Lift access available but must book 24hrs ahead.',
        
        // Documents and photos
        documents: [
            { name: 'Floor Plan.pdf', type: 'pdf', icon: 'fa-file-pdf' },
            { name: 'Living Room.jpg', type: 'image', icon: 'fa-file-image' },
            { name: 'Site Access Notes.pdf', type: 'pdf', icon: 'fa-file-pdf' }
        ],
        
        photos: [
            { name: 'Front of Property', icon: 'fa-camera' },
            { name: 'Living Room', icon: 'fa-camera' },
            { name: 'Staircase', icon: 'fa-camera' }
        ],
        
        timeline: [
            { date: 'Feb 15, 2026', action: 'Quote accepted', user: 'Robert Chen' },
            { date: 'Feb 14, 2026', action: 'Final quote sent', user: 'Sarah Jenkins' },
            { date: 'Feb 10, 2026', action: 'Site visit completed', user: 'Mike Johnson' },
            { date: 'Feb 8, 2026', action: 'Initial consultation', user: 'Sarah Jenkins' }
        ]
    },
    
    job6: {
        id: 'JOB-2026-006',
        address: '102/45 Collins St, Darwin City',
        agent: 'Jellis Craig',
        client: 'James Miller',
        status: 'active',
        value: 15600,
        created: 'Feb 16, 2026',
        scope: 'Complete home staging for display home. All rooms including outdoor entertaining area. Luxury contemporary theme.',
        team: 'Team Alpha',
        crew: 'Mike Johnson (Lead), Sarah Chen, David Park, Lisa Anderson',
        timeline: 'Started Feb 16, expected completion Feb 20',
        
        // Job address details
        jobAddress: {
            street: '102/45 Collins St',
            suburb: 'Darwin City',
            state: 'NT',
            postcode: '0800',
            access: 'Apartment building. Must check in with concierge. Loading dock access via basement.',
            parking: '15min loading zone at front. Basement parking available with height clearance 2.2m.'
        },
        
        // Pickup address (same as job for delivery)
        pickupAddress: {
            street: '102/45 Collins St',
            suburb: 'Darwin City',
            state: 'NT',
            postcode: '0800',
            access: 'Same as job address - delivery only',
            parking: 'Same as job address'
        },
        
        // Logistics details
        jobDate: 'Feb 16-20, 2026',
        truckSize: 'Large Rigid (12T)',
        truckStatus: 'On Site - Truck #B-17',
        opsTeam: 'Mike Johnson (Lead), Sarah Chen, David Park, Lisa Anderson',
        opsLead: 'Mike Johnson - 0412 345 678',
        stylist: 'Emma Thompson - 0423 456 789',
        etaWindow: '8:00 AM - 4:00 PM daily',
        photoDeadline: 'Feb 21, 2026 12:00 PM',
        
        items: [
            { name: 'Living Room Premium', quantity: 1, sku: 'PKG-LP-002' },
            { name: 'Dining Suite', quantity: 1, sku: 'PKG-DS-002' },
            { name: 'Master Bedroom Luxe', quantity: 1, sku: 'PKG-ML-002' },
            { name: 'Guest Bedroom Set', quantity: 2, sku: 'PKG-GB-003' },
            { name: 'Outdoor Living Package', quantity: 1, sku: 'PKG-OL-001' },
            { name: 'Home Office Setup', quantity: 1, sku: 'PKG-OF-001' }
        ],
        
        specialRequirements: 'Display home for weekend open house. Must be completed by Thursday. All furniture needs to be new condition. Photography scheduled for Friday. Building has strict noise restrictions - no power tools before 8am.',
        
        documents: [
            { name: 'Floor Plan.pdf', type: 'pdf', icon: 'fa-file-pdf' },
            { name: 'Living Room Concept.jpg', type: 'image', icon: 'fa-file-image' },
            { name: 'Building Access Form.pdf', type: 'pdf', icon: 'fa-file-pdf' },
            { name: 'Style Guide.pdf', type: 'pdf', icon: 'fa-file-pdf' }
        ],
        
        photos: [
            { name: 'Building Entrance', icon: 'fa-camera' },
            { name: 'Living Room - Empty', icon: 'fa-camera' },
            { name: 'Kitchen Area', icon: 'fa-camera' },
            { name: 'Master Bedroom', icon: 'fa-camera' },
            { name: 'Outdoor Area', icon: 'fa-camera' }
        ],
        
        timeline: [
            { date: 'Feb 16, 2026', action: 'Installation started', user: 'Mike Johnson' },
            { date: 'Feb 15, 2026', action: 'Quote accepted', user: 'James Miller' },
            { date: 'Feb 14, 2026', action: 'Final quote sent', user: 'Michael Vogt' },
            { date: 'Feb 10, 2026', action: 'Site visit completed', user: 'Mike Johnson' }
        ]
    },
    
    job12: {
        id: 'JOB-2026-012',
        address: '59 Smith St, Darwin City',
        agent: 'Ray White Darwin',
        client: 'Property Sold - Buyer',
        status: 'pickup',
        value: 12400,
        created: 'Feb 17, 2026',
        scope: 'Property sold - furniture removal required. Full house contents need to be picked up and returned to warehouse.',
        team: 'Logistics Team',
        crew: 'Truck A - Driver: Mark Lee, Assistant: John Smith',
        timeline: 'Pickup scheduled for Feb 20',
        
        // Job address details
        jobAddress: {
            street: '59 Smith St',
            suburb: 'Darwin City',
            state: 'NT',
            postcode: '0800',
            access: 'Gate code: 1234. Keys in lockbox (code: 5678). Rear lane access available.',
            parking: 'Street parking available. Loading zone at front.'
        },
        
        // Pickup address (where items go)
        pickupAddress: {
            street: '12 Warehouse Lane',
            suburb: 'Winnellie',
            state: 'NT',
            postcode: '0820',
            access: 'Warehouse receiving. Deliver to Bay 4. Must check in at office.',
            parking: 'Dedicated truck bays available.'
        },
        
        // Logistics details
        jobDate: 'Feb 20, 2026',
        truckSize: 'Medium Rigid (8T) with tail lift',
        truckStatus: 'Confirmed - Truck #A-42',
        opsTeam: 'Mark Lee (Driver), John Smith (Assistant)',
        opsLead: 'Mark Lee - 0412 987 654',
        stylist: 'N/A - Logistics only',
        etaWindow: '9:00 AM - 11:00 AM',
        photoDeadline: 'Feb 21, 2026 (Post-pickup photos)',
        
        items: [
            { name: 'Living Room Set', quantity: 1, notes: 'Sofa, coffee table, TV unit' },
            { name: 'Dining Set', quantity: 1, notes: 'Table + 6 chairs' },
            { name: 'Master Bedroom Set', quantity: 1, notes: 'King bed, 2 nightstands, dresser' },
            { name: 'Guest Bedroom', quantity: 1, notes: 'Queen bed, nightstand' }
        ],
        
        specialRequirements: 'New owners taking possession Feb 22. Need all furniture removed by Feb 21. Access through rear lane. Some items to be returned to warehouse, others to new property (see attached list).',
        
        documents: [
            { name: 'Inventory List.pdf', type: 'pdf', icon: 'fa-file-pdf' },
            { name: 'Access Instructions.pdf', type: 'pdf', icon: 'fa-file-pdf' }
        ],
        
        photos: [
            { name: 'Living Room - Current', icon: 'fa-camera' },
            { name: 'Master Bedroom', icon: 'fa-camera' },
            { name: 'Access Route', icon: 'fa-camera' }
        ],
        
        timeline: [
            { date: 'Feb 17, 2026', action: 'Property sold notification', user: 'System' },
            { date: 'Feb 17, 2026', action: 'Pickup scheduled', user: 'Logistics Team' },
            { date: 'Jan 15, 2026', action: 'Installation completed', user: 'Team Alpha' }
        ]
    }
};

// Show job details modal
function showJobDetails(jobId) {
    const job = jobDetails[jobId] || jobDetails.job1;
    const modal = document.getElementById('jobModal');
    const content = document.getElementById('jobModalContent');
    
    const statusClass = job.status === 'needs-scheduling' ? 'status-scheduling' : 
                        job.status === 'active' ? 'status-active' : 
                        job.status === 'pickup' ? 'status-pickup' : 'status-completed';
    
    const statusText = job.status === 'needs-scheduling' ? 'Needs Scheduling' : 
                       job.status === 'active' ? 'Active Installation' : 
                       job.status === 'pickup' ? 'Pickup Required' : 'Completed';
    
    // Items HTML
    let itemsHtml = '';
    job.items.forEach(item => {
        itemsHtml += `
            <div class="job-item-row">
                <span class="job-item-name">${item.name} ${item.sku ? `(${item.sku})` : ''}</span>
                <span class="job-item-quantity">Qty: ${item.quantity}</span>
            </div>
        `;
    });
    
    // Documents HTML
    let documentsHtml = '';
    if (job.documents) {
        job.documents.forEach(doc => {
            documentsHtml += `
                <div class="document-badge" onclick="alert('Opening ${doc.name}')">
                    <i class="fa ${doc.icon}"></i>
                    <span>${doc.name}</span>
                </div>
            `;
        });
    }
    
    // Photos HTML
    let photosHtml = '';
    if (job.photos) {
        job.photos.forEach(photo => {
            photosHtml += `
                <div class="photo-thumb" onclick="alert('Viewing ${photo.name}')">
                    <i class="fa ${photo.icon}"></i>
                    <span>${photo.name}</span>
                </div>
            `;
        });
    }
    
    // Timeline HTML
    let timelineHtml = '';
    job.timeline.forEach(event => {
        timelineHtml += `
            <div class="job-timeline-item">
                <div class="job-timeline-date">${event.date}</div>
                <div class="job-timeline-action">${event.action} - ${event.user}</div>
            </div>
        `;
    });
    
    content.innerHTML = `
        <div class="job-detail-header">
            <div class="job-detail-title">
                <h2>${job.address}</h2>
                <p>Job #${job.id} • ${job.agent} • Client: ${job.client}</p>
            </div>
            <div class="job-status-badge ${statusClass}">${statusText}</div>
        </div>
        
        <div class="job-detail-grid">
            <!-- Job Address Card -->
            <div class="job-detail-card">
                <h4>📍 JOB ADDRESS</h4>
                <div class="job-address-block">
                    <div class="job-address-line">
                        <span class="job-address-label">Address:</span>
                        <span class="job-address-text">${job.jobAddress.street}, ${job.jobAddress.suburb} ${job.jobAddress.state} ${job.jobAddress.postcode}</span>
                    </div>
                    <div class="job-address-line">
                        <span class="job-address-label">Access:</span>
                        <span class="job-address-text">${job.jobAddress.access}</span>
                    </div>
                    <div class="job-address-line">
                        <span class="job-address-label">Parking:</span>
                        <span class="job-address-text">${job.jobAddress.parking}</span>
                    </div>
                </div>
            </div>
            
            <!-- Pickup Address Card -->
            <div class="job-detail-card">
                <h4>🚚 PICKUP ADDRESS</h4>
                <div class="job-address-block">
                    <div class="job-address-line">
                        <span class="job-address-label">Address:</span>
                        <span class="job-address-text">${job.pickupAddress.street}, ${job.pickupAddress.suburb} ${job.pickupAddress.state} ${job.pickupAddress.postcode}</span>
                    </div>
                    <div class="job-address-line">
                        <span class="job-address-label">Access:</span>
                        <span class="job-address-text">${job.pickupAddress.access}</span>
                    </div>
                    <div class="job-address-line">
                        <span class="job-address-label">Parking:</span>
                        <span class="job-address-text">${job.pickupAddress.parking}</span>
                    </div>
                </div>
            </div>
            
            <!-- Logistics Card -->
            <div class="job-detail-card">
                <h4>📋 LOGISTICS DETAILS</h4>
                <div class="job-info-row">
                    <span class="job-info-label">Job Date:</span>
                    <span class="job-info-value">${job.jobDate}</span>
                </div>
                <div class="job-info-row">
                    <span class="job-info-label">Truck Size:</span>
                    <span class="job-info-value">${job.truckSize}</span>
                </div>
                <div class="job-info-row">
                    <span class="job-info-label">Truck Status:</span>
                    <span class="job-info-value">${job.truckStatus}</span>
                </div>
                <div class="job-info-row">
                    <span class="job-info-label">Ops Team:</span>
                    <span class="job-info-value">${job.opsTeam}</span>
                </div>
                <div class="job-info-row">
                    <span class="job-info-label">Ops Lead:</span>
                    <span class="job-info-value">${job.opsLead}</span>
                </div>
                <div class="job-info-row">
                    <span class="job-info-label">Stylist:</span>
                    <span class="job-info-value">${job.stylist}</span>
                </div>
                <div class="job-info-row">
                    <span class="job-info-label">ETA Window:</span>
                    <span class="job-info-value">${job.etaWindow}</span>
                </div>
                <div class="job-info-row">
                    <span class="job-info-label">Photo Deadline:</span>
                    <span class="job-info-value" style="color: var(--primary);">${job.photoDeadline}</span>
                </div>
            </div>
            
            <!-- Scope Card -->
            <div class="job-detail-card">
                <h4>📝 SCOPE OF WORK</h4>
                <p style="margin: 0 0 15px 0; font-size: 0.75rem; color: #ccc; line-height: 1.5;">${job.scope}</p>
                
                <h4 style="margin: 15px 0 10px 0; color: var(--primary); font-size: 0.75rem;">ALLOCATED ITEMS</h4>
                <div class="job-items-list">
                    ${itemsHtml}
                </div>
            </div>
        </div>
        
        <!-- Special Requirements -->
        <div class="job-detail-card" style="margin-bottom: 20px;">
            <h4>⚠️ SPECIAL REQUIREMENTS</h4>
            <p style="margin: 0; font-size: 0.75rem; color: #ccc;">${job.specialRequirements}</p>
        </div>
        
        <!-- Documents & Photos -->
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-bottom: 20px;">
            <div class="job-detail-card">
                <h4>📄 DOCUMENTS</h4>
                <div class="job-documents">
                    ${documentsHtml}
                </div>
            </div>
            
            <div class="job-detail-card">
                <h4>📸 PROPERTY PHOTOS</h4>
                <div class="photo-gallery">
                    ${photosHtml}
                </div>
            </div>
        </div>
        
        <!-- Timeline -->
        <div class="job-detail-card">
            <h4>⏱️ ACTIVITY TIMELINE</h4>
            <div class="job-timeline">
                ${timelineHtml}
            </div>
        </div>
        
        <!-- Action Buttons -->
        <div class="job-actions">
            <button class="btn-primary" onclick="alert('Opening job in quote builder')">
                <i class="fa fa-file-invoice"></i> EDIT QUOTE
            </button>
            <button class="btn-primary" style="background: #333; color: #fff;" onclick="alert('Contacting team')">
                <i class="fa fa-users"></i> CONTACT TEAM
            </button>
            <button class="btn-primary" style="background: #333; color: #fff;" onclick="alert('Generating job report')">
                <i class="fa fa-file-pdf"></i> JOB REPORT
            </button>
            <button class="btn-primary" style="background: #333; color: #fff;" onclick="alert('Viewing all photos')">
                <i class="fa fa-images"></i> VIEW PHOTOS
            </button>
        </div>
    `;
    
    modal.classList.add('active');
}

function closeJobModal() {
    document.getElementById('jobModal').classList.remove('active');
}

// Schedule Job Functions
let currentJobToSchedule = null;

function scheduleJob(jobId) {
    currentJobToSchedule = jobId;
    const job = jobDetails[jobId];
    
    if (job) {
        document.getElementById('scheduleAddress').value = job.address;
        document.getElementById('scheduleModal').classList.add('active');
    }
}

function closeScheduleModal() {
    document.getElementById('scheduleModal').classList.remove('active');
    currentJobToSchedule = null;
}

function confirmSchedule() {
    const jobDate = document.getElementById('jobDate').value;
    const timeSlot = document.getElementById('timeSlot').value;
    const team = document.getElementById('assignTeam').value;
    const truckSize = document.getElementById('truckSize').value;
    const status = document.getElementById('jobStatus').value;
    
    if (!jobDate) {
        alert('Please select a job date');
        return;
    }
    
    // Update job status
    if (currentJobToSchedule && jobDetails[currentJobToSchedule]) {
        jobDetails[currentJobToSchedule].status = status;
        jobDetails[currentJobToSchedule].jobDate = jobDate;
        jobDetails[currentJobToSchedule].truckSize = truckSize;
        jobDetails[currentJobToSchedule].opsTeam = team;
        jobDetails[currentJobToSchedule].truckStatus = 'Scheduled';
        
        alert(`Job scheduled successfully for ${jobDate}\nTeam: ${team}\nTruck: ${truckSize}`);
        closeScheduleModal();
        
        // Refresh the jobs view (in a real app, you'd move the job to the appropriate column)
        showSection('jobs');
    }
}

// Quote Management Functions
function editQuote(quoteId) {
    alert(`Editing quote ${quoteId}`);
    showSection('quote');
}

function sendQuote(quoteId) {
    alert(`Quote ${quoteId} sent to client`);
}

function viewQuote(quoteId) {
    alert(`Viewing quote ${quoteId}`);
}

function resendQuote(quoteId) {
    alert(`Quote ${quoteId} resent to client`);
}

function convertToJob(quoteId) {
    alert(`Quote ${quoteId} converted to job - now in Needs Scheduling`);
    showSection('jobs');
}

function archiveQuote(quoteId) {
    alert(`Quote ${quoteId} archived`);
}

// Your existing functions remain unchanged

// Updated showSection with stagger and animations
function showSection(id) {
    document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
    document.getElementById(id).classList.add('active');
    document.querySelectorAll('nav a').forEach(a => a.classList.remove('active'));
    
    const titles = {
        'dash': 'Sale by Design / <b>Executive Insights</b>',
        'jobs': 'Operations / <b>Master Jobs Board</b>',
        'quotes-pending': 'Sales / <b>Pending Quotes</b>',
        'agents': 'Partners & Relationships / <b>Client Intelligence</b>',
        'quote': 'Sales / <b>Digital Quote Builder</b>',
        'stock': 'Warehouse / <b>Inventory Hub</b>',
        'calendar': 'Scheduling / <b>Operations Calendar</b>'
    };
    document.getElementById('header-title').innerHTML = titles[id];
    
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
        if(link.getAttribute('onclick') && link.getAttribute('onclick').includes(id)) link.classList.add('active');
    });

    // Reset quote to step 1 when opening quote section
    if(id === 'quote') nextStep(1);

    // Stagger animation for cards
    const section = document.getElementById(id);
    const cards = section.querySelectorAll('.metric-card, .metric-mini, .job-item, .partner-card, .asset-card, .room-card, .block, .quote-step');
    cards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.animation = `slideUpFade 0.6s cubic-bezier(0.4, 0, 0.2, 1) ${index * 0.05}s forwards`;
    });
}

// Quote Wizard Logic
function nextStep(step) {
    document.querySelectorAll('.quote-step').forEach(s => s.classList.remove('active'));
    document.getElementById('qstep' + step).classList.add('active');
}

function selectChoice(el) {
    el.parentElement.querySelectorAll('.choice-card').forEach(c => c.classList.remove('selected'));
    el.classList.add('selected');
}

// Example of a search handler
document.querySelector('.search-wrapper input').addEventListener('keyup', function(e) {
    console.log("Global Search for:", e.target.value);
});

// Function to update the file name label
function updateFileLabel() {
    const input = document.getElementById('floorPlanUpload');
    const label = document.getElementById('fileLabel');
    label.innerText = input.files.length + " file(s) successfully attached";
}

// Function to calculate furniture sizes based on room dimensions
function calculateFurniture() {
    const type = document.getElementById('roomTypeSelect').value;
    const w = parseFloat(document.getElementById('roomWidth').value);
    const d = parseFloat(document.getElementById('roomDepth').value);
    const container = document.getElementById('guideTableContainer');

    if (!type || !w || !d) {
        container.innerHTML = '<p style="color:#444; font-size:0.7rem;">Enter dimensions to automate sizing...</p>';
        return;
    }

    let recommendations = [];

    // Interior Design logic: Reserve 900mm (0.9m) for walking space
    if (type === 'living') {
        recommendations = [
            { item: "Max Sofa Length", val: (Math.max(w, d) * 0.65).toFixed(1) + "m" },
            { item: "Recommended Rug", val: (w - 0.6).toFixed(1) + "m x " + (d - 0.6).toFixed(1) + "m" }
        ];
    } else if (type === 'dining') {
        recommendations = [
            { item: "Max Table Size", val: (w - 1.8).toFixed(1) + "m x " + (d - 1.8).toFixed(1) + "m" },
            { item: "Est. Capacity", val: Math.floor((w * d) / 1.8) + " Chairs" }
        ];
    } else if (type === 'bedroom') {
        let bedFit = w < 3 ? "Double Bed" : (w < 3.5 ? "Queen Bed" : "King Bed");
        recommendations = [
            { item: "Ideal Bed Size", val: bedFit },
            { item: "Side Table Allowance", val: "2x 500mm Units" }
        ];
    }

    // Build the result table
    let html = `<table style="width:100%; font-size:0.75rem; border-collapse:collapse;">`;
    recommendations.forEach(r => {
        html += `<tr style="border-bottom:1px solid #222;"><td style="padding:8px 0; color:#888;">${r.item}</td><td style="text-align:right; color:var(--primary); font-weight:bold;">${r.val}</td></tr>`;
    });
    container.innerHTML = html + `</table>`;
}

let currentMonth = new Date().getMonth();
let currentYear = new Date().getFullYear();

const myJobs = [
    { date: '2026-02-18', title: 'Luxury Penthouse' },
    { date: '2026-02-22', title: 'Smith Residence' }
];

function renderCalendar() {
    const daysContainer = document.getElementById('calendarDays');
    const monthDisplay = document.getElementById('monthDisplay');
    if (!daysContainer) return;

    const firstDay = new Date(currentYear, currentMonth, 1).getDay();
    const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
    const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    
    monthDisplay.innerText = monthNames[currentMonth] + " " + currentYear;
    daysContainer.innerHTML = '';

    for (let i = 0; i < firstDay; i++) {
        daysContainer.innerHTML += `<div class="day-cell" style="opacity:0"></div>`;
    }

    for (let day = 1; day <= daysInMonth; day++) {
        const dateStr = `${currentYear}-${String(currentMonth + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
        const dayJobs = myJobs.filter(j => j.date === dateStr);
        let jobHtml = dayJobs.map(j => `<div class="job-tag">${j.title}</div>`).join('');
        
        const isToday = day === new Date().getDate() && currentMonth === new Date().getMonth() && currentYear === new Date().getFullYear();
        
        daysContainer.innerHTML += `
            <div class="day-cell ${isToday ? 'today' : ''}">
                <span class="day-number">${day}</span>
                ${jobHtml}
            </div>`;
    }
}

function changeMonth(dir) {
    currentMonth += dir;
    if (currentMonth < 0) { currentMonth = 11; currentYear--; }
    if (currentMonth > 11) { currentMonth = 0; currentYear++; }
    renderCalendar();
}

// Run immediately
renderCalendar();

let roomCount = 0;

function addRoom(type) {
    roomCount++;
    const container = document.getElementById('roomContainer');
    
    const roomHtml = `
        <div class="room-card" id="room-${roomCount}">
            <div class="room-header">
                <span class="room-title"><i class="fa fa-folder-open"></i> ${type} ${roomCount}</span>
                <button onclick="this.closest('.room-card').remove()" style="background:none; border:none; color:#ff4d4d; cursor:pointer;">
                    <i class="fa fa-trash"></i>
                </button>
            </div>
            
            <div class="room-dimensions" style="display:flex; gap:10px; margin-bottom:15px;">
                <input type="number" placeholder="Width (m)" style="width:50%; background:#050505; border:1px solid #222; color:white; padding:8px; border-radius:4px;">
                <input type="number" placeholder="Depth (m)" style="width:50%; background:#050505; border:1px solid #222; color:white; padding:8px; border-radius:4px;">
            </div>

            <div id="items-${roomCount}">
                </div>

            <button class="btn-add-item" onclick="addItemToRoom(${roomCount})">
                <i class="fa fa-plus"></i> Add Furniture Item
            </button>
        </div>
    `;
    
    container.insertAdjacentHTML('beforeend', roomHtml);
}

function addItemToRoom(id) {
    const itemContainer = document.getElementById(`items-${id}`);
    const itemHtml = `
        <div class="item-row">
            <input type="text" placeholder="Item Name (e.g. King Bed)">
            <select>
                <option>Luxe Style</option>
                <option>Modern</option>
                <option>Coastal</option>
            </select>
            <button onclick="this.parentElement.remove()" style="background:none; border:none; color:#444; cursor:pointer;">
                <i class="fa fa-times"></i>
            </button>
        </div>
    `;
    itemContainer.insertAdjacentHTML('beforeend', itemHtml);
}

// NEW ENHANCEMENT FUNCTIONS

// Inventory Functions
function activateScanner() {
    const scannerInput = document.getElementById('scannerInput');
    if (scannerInput.style.display === 'none' || !scannerInput.style.display) {
        scannerInput.style.display = 'flex';
        document.getElementById('skuInput').focus();
    } else {
        scannerInput.style.display = 'none';
    }
}

function lookupSKU() {
    const sku = document.getElementById('skuInput').value;
    if (sku) {
        alert(`Looking up SKU: ${sku}\nFound: Velvet Emerald 3-Seater\nLocation: Aisle 4, Shelf B\nStatus: Available`);
        document.getElementById('skuInput').value = '';
    }
}

function selectAllInventory() {
    alert('Selecting all inventory items');
}

function bulkPrintLabels() {
    alert('Printing labels for selected items');
}

function bulkUpdateLocation() {
    const newLocation = prompt('Enter new location for selected items:');
    if (newLocation) {
        alert(`Updated items to location: ${newLocation}`);
    }
}

function bulkExport() {
    alert('Exporting selected inventory items...');
}

function searchInventory() {
    const searchTerm = document.getElementById('inventorySearch').value.toLowerCase();
    alert(`Searching for: ${searchTerm}`);
}

function applyFilters() {
    alert('Applying advanced filters...');
}

function exportInventoryReport() {
    alert('Generating comprehensive inventory report...');
}

// Quote Builder Functions
function toggleQuoteSidebar() {
    document.getElementById('quoteSidebar').classList.toggle('active');
}

function loadTemplate(type) {
    const templates = {
        apartment: {
            rooms: ['Living Room', 'Bedroom'],
            total: 3450
        },
        house: {
            rooms: ['Living Room', 'Dining Room', 'Bedroom', 'Study'],
            total: 5890
        },
        luxury: {
            rooms: ['Living Room', 'Dining Room', 'Master Bedroom', 'Guest Bedroom', 'Study'],
            total: 12450
        },
        commercial: {
            rooms: ['Reception', 'Office', 'Conference Room'],
            total: 7890
        }
    };
    
    const template = templates[type];
    alert(`Loading ${type.toUpperCase()} template\nRooms: ${template.rooms.join(', ')}\nEstimated Total: $${template.total}`);
}

function applyDiscount() {
    const code = document.querySelector('.quote-discount-code input').value;
    if (code) {
        alert(`Discount code "${code}" applied!`);
    }
}

function sendQuoteForApproval() {
    alert('Quote sent for approval! Client will receive email notification.');
}

function selectMaterial(material) {
    alert(`Selected material: ${material}`);
    document.getElementById('materialPicker').classList.remove('show');
}

// NEW: Enhanced Quote Builder Functions
function filterProducts(category) {
    document.querySelectorAll('.category-chip').forEach(chip => chip.classList.remove('active'));
    event.target.classList.add('active');
    alert(`Filtering products by: ${category}`);
}

function addProductToQuote(name, sku, price) {
    alert(`Added ${name} to quote\nSKU: ${sku}\nPrice: $${price}`);
}

function addNote() {
    alert('Note added successfully');
}

// NEW: Agent Detail Functions
function showAgentDetails(agentId) {
    const modal = document.getElementById('agentModal');
    const content = document.getElementById('agentModalContent');
    
    const agents = {
        raywhite: {
            name: 'Ray White Darwin',
            type: 'B2B Enterprise Partner',
            tier: 'Platinum Partner',
            since: '2019',
            primary: 'Sarah Jenkins',
            email: 'sarah.j@raywhite.com',
            phone: '0412 888 777',
            metrics: {
                activeJobs: 4,
                totalRevenue: 84200,
                conversion: 92,
                avgDeal: 21050,
                propertiesStaged: 18,
                repeatRate: 85
            },
            properties: [
                { address: '59 Smith St, Darwin City', status: 'Active', value: 12400 },
                { address: '24 Leslie Ave, Darwin City', status: 'Active', value: 8900 },
                { address: '102/45 Collins St', status: 'Completed', value: 15600 },
                { address: '15 Marina Blvd', status: 'Pending', value: 18900 }
            ]
        },
        jellis: {
            name: 'Jellis Craig',
            type: 'B2B Boutique Partner',
            tier: 'Gold Partner',
            since: '2021',
            primary: 'Michael Vogt',
            email: 'michael.v@jelliscraig.com',
            phone: '0422 111 333',
            metrics: {
                activeJobs: 2,
                totalRevenue: 32150,
                conversion: 74,
                avgDeal: 16075,
                propertiesStaged: 7,
                repeatRate: 62
            },
            properties: [
                { address: '12 Miller St, Darwin City', status: 'Active', value: 8900 },
                { address: '8/23 Mitchell St', status: 'Active', value: 12300 },
                { address: '45 Cavenagh St', status: 'Completed', value: 10950 }
            ]
        },
        sarah: {
            name: 'Sarah Jenkins',
            type: 'Senior Agent - Ray White',
            tier: 'Top Performer',
            since: '2020',
            primary: 'Sarah Jenkins',
            email: 'sarah.j@raywhite.com',
            phone: '0412 888 777',
            metrics: {
                activeJobs: 3,
                totalRevenue: 24500,
                conversion: 88,
                avgDeal: 8167,
                propertiesStaged: 12,
                repeatRate: 75
            },
            properties: [
                { address: '59 Smith St, Darwin City', status: 'Active', value: 12400 },
                { address: '24 Leslie Ave', status: 'Active', value: 8900 },
                { address: '102/45 Collins St', status: 'Completed', value: 15600 }
            ]
        }
    };
    
    const agent = agents[agentId] || agents.raywhite;
    
    let propertiesHtml = '';
    agent.properties.forEach(prop => {
        const statusClass = prop.status.toLowerCase() === 'active' ? 'active' : 
                           prop.status.toLowerCase() === 'completed' ? 'completed' : 'pending';
        propertiesHtml += `
            <div class="property-item">
                <span class="property-address">${prop.address}</span>
                <span class="property-status property-status.${statusClass}">${prop.status}</span>
                <span style="color: var(--primary); font-weight: bold;">$${prop.value.toLocaleString()}</span>
            </div>
        `;
    });
    
    content.innerHTML = `
        <div class="agent-header-large">
            <div class="agent-avatar-large">${agent.name.split(' ').map(n => n[0]).join('')}</div>
            <div class="agent-info-large">
                <h2>${agent.name}</h2>
                <p><i class="fa fa-building"></i> ${agent.type}</p>
                <p><i class="fa fa-tag"></i> ${agent.tier} • Partner since ${agent.since}</p>
                <p><i class="fa fa-user"></i> Primary Contact: ${agent.primary}</p>
                <p><i class="fa fa-envelope"></i> ${agent.email}</p>
                <p><i class="fa fa-phone"></i> ${agent.phone}</p>
            </div>
        </div>
        
        <div class="agent-metrics-grid">
            <div class="agent-metric-card">
                <span class="agent-metric-value">${agent.metrics.activeJobs}</span>
                <span class="agent-metric-label">Active Jobs</span>
            </div>
            <div class="agent-metric-card">
                <span class="agent-metric-value">$${(agent.metrics.totalRevenue/1000).toFixed(1)}K</span>
                <span class="agent-metric-label">Total Revenue</span>
            </div>
            <div class="agent-metric-card">
                <span class="agent-metric-value">${agent.metrics.conversion}%</span>
                <span class="agent-metric-label">Conversion</span>
            </div>
            <div class="agent-metric-card">
                <span class="agent-metric-value">${agent.metrics.repeatRate}%</span>
                <span class="agent-metric-label">Repeat Rate</span>
            </div>
        </div>
        
        <h3 style="color: var(--primary); margin: 20px 0 15px;">Recent Properties</h3>
        <div class="agent-property-list">
            ${propertiesHtml}
        </div>
        
        <div style="margin-top: 20px; display: flex; gap: 10px; justify-content: flex-end;">
            <button class="btn-primary" onclick="alert('Contacting ${agent.primary}')">
                <i class="fa fa-envelope"></i> CONTACT
            </button>
            <button class="btn-primary" style="background: #333; color: #fff;" onclick="alert('Creating new quote for ${agent.name}')">
                <i class="fa fa-file-invoice"></i> NEW QUOTE
            </button>
        </div>
    `;
    
    modal.classList.add('active');
}

function closeAgentModal() {
    document.getElementById('agentModal').classList.remove('active');
}

// Add material picker to item rows
document.addEventListener('click', function(e) {
    if (e.target.matches('.item-row input[type="text"]')) {
        const picker = document.getElementById('materialPicker');
        const rect = e.target.getBoundingClientRect();
        picker.style.top = rect.bottom + 'px';
        picker.style.left = rect.left + 'px';
        picker.classList.add('show');
    } else if (!e.target.closest('.material-option')) {
        document.getElementById('materialPicker').classList.remove('show');
    }
});

// Calendar day click handler
document.addEventListener('click', function(e) {
    if (e.target.closest('.day-cell') && !e.target.closest('.job-tag')) {
        const dayCell = e.target.closest('.day-cell');
        const dayNumber = dayCell.querySelector('.day-number').textContent;
        const panel = document.getElementById('selectedDateEvents');
        const title = document.getElementById('selectedDateTitle');
        
        const dateStr = new Date(currentYear, currentMonth, dayNumber).toLocaleDateString('en-US', { 
            month: 'long', 
            day: 'numeric', 
            year: 'numeric' 
        });
        
        title.textContent = dateStr;
        panel.style.display = 'block';
    }
});

// Auto-refresh inventory data simulation
setInterval(() => {
    console.log('Inventory sync complete');
}, 30000);

// Save quote drafts automatically
let quoteDraftTimer;
document.addEventListener('input', function(e) {
    if (e.target.closest('#quote')) {
        clearTimeout(quoteDraftTimer);
        quoteDraftTimer = setTimeout(() => {
            console.log('Quote draft auto-saved');
        }, 2000);
    }
});

// Add keyboard shortcuts
document.addEventListener('keydown', function(e) {
    // Ctrl/Cmd + S to save quote
    if ((e.ctrlKey || e.metaKey) && e.key === 's') {
        e.preventDefault();
        if (document.getElementById('quote').classList.contains('active')) {
            alert('Quote saved successfully!');
        }
    }
    
    // Ctrl/Cmd + F to search inventory
    if ((e.ctrlKey || e.metaKey) && e.key === 'f') {
        e.preventDefault();
        if (document.getElementById('stock').classList.contains('active')) {
            document.getElementById('inventorySearch').focus();
        }
    }
});

// Close modal when clicking outside
document.addEventListener('click', function(e) {
    const modal = document.getElementById('agentModal');
    if (e.target === modal) {
        closeAgentModal();
    }
    
    const jobModal = document.getElementById('jobModal');
    if (e.target === jobModal) {
        closeJobModal();
    }
    
    const scheduleModal = document.getElementById('scheduleModal');
    if (e.target === scheduleModal) {
        closeScheduleModal();
    }
});

function showTemplatePanel() {
    const panel = document.getElementById('templatePanel');
    panel.style.display = panel.style.display === 'none' ? 'block' : 'none';
}

// Template preview modal HTML
const modalHTML = `
<div class="template-preview-modal" id="templatePreviewModal" style="display: none; position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.95); z-index: 10000; align-items: center; justify-content: center;">
    <div style="background: var(--panel); border: 1px solid var(--border); border-radius: 12px; width: 90%; max-width: 600px; max-height: 80vh; overflow-y: auto; padding: 30px; position: relative;">
        <button onclick="closePreviewModal()" style="position: absolute; top: 20px; right: 20px; background: none; border: none; color: #666; font-size: 1.5rem; cursor: pointer;">&times;</button>
        <div id="previewContent"></div>
    </div>
</div>
`;

// Add modal to body if not exists
if (!document.getElementById('templatePreviewModal')) {
    document.body.insertAdjacentHTML('beforeend', modalHTML);
}

// Template data
const templates = {
    apartment: {
        name: 'Modern Apartment Package',
        total: 3450,
        rooms: [
            { name: 'Living Room', items: ['3-Seater Sofa', 'Coffee Table', 'Media Console'] },
            { name: 'Bedroom', items: ['Queen Bed', 'Nightstands (2)', 'Dresser'] },
            { name: 'Dining', items: ['Dining Table (4-seat)', 'Dining Chairs (4)'] }
        ]
    },
    house: {
        name: 'Complete House Package',
        total: 8890,
        rooms: [
            { name: 'Living Room', items: ['Sectional Sofa', 'Coffee Table', 'Side Tables', 'Area Rug'] },
            { name: 'Dining Room', items: ['Dining Table (6-8 seat)', 'Dining Chairs (6)', 'Sideboard'] },
            { name: 'Master Bedroom', items: ['King Bed', 'Nightstands (2)', 'Dresser'] },
            { name: 'Guest Bedroom', items: ['Queen Bed', 'Nightstand', 'Chest'] },
            { name: 'Home Office', items: ['Desk', 'Office Chair', 'Bookshelf'] }
        ]
    },
    luxury: {
        name: 'Luxury Collection',
        total: 16450,
        rooms: [
            { name: 'Grand Living', items: ['Designer Sectional', 'Marble Coffee Table', 'Chandelier'] },
            { name: 'Formal Dining', items: ['Extended Table', 'Designer Chairs (8)', 'Credenza'] },
            { name: 'Master Suite', items: ['King Bed (Upholstered)', 'Luxury Nightstands', 'Chaise'] }
        ]
    },
    commercial: {
        name: 'Commercial Package',
        total: 12890,
        rooms: [
            { name: 'Reception', items: ['Reception Desk', 'Guest Chairs (4)', 'Coffee Table'] },
            { name: 'Office', items: ['Executive Desk', 'Executive Chair', 'Bookshelf'] },
            { name: 'Conference', items: ['Conference Table', 'Conference Chairs (8)'] }
        ]
    }
};

function previewTemplate(type) {
    const template = templates[type];
    const modal = document.getElementById('templatePreviewModal');
    const content = document.getElementById('previewContent');
    
    let roomsHtml = '';
    template.rooms.forEach(room => {
        roomsHtml += `
            <div style="background: #111; border: 1px solid #222; border-radius: 6px; margin-bottom: 10px; padding: 12px;">
                <h4 style="color: var(--primary); margin: 0 0 8px 0; font-size: 0.8rem;">${room.name}</h4>
                <ul style="margin: 0; padding-left: 20px; color: #ccc; font-size: 0.7rem;">
                    ${room.items.map(item => `<li>${item}</li>`).join('')}
                </ul>
            </div>
        `;
    });
    
    content.innerHTML = `
        <h2 style="color: var(--primary); margin-top: 0;">${template.name}</h2>
        ${roomsHtml}
        <div style="margin-top: 20px; padding-top: 20px; border-top: 1px solid #333; text-align: right;">
            <span style="color: #666;">Package Total:</span>
            <span style="font-size: 1.5rem; font-weight: 800; color: var(--primary); margin-left: 15px;">$${template.total.toLocaleString()}</span>
        </div>
        <button class="btn-primary" style="width: 100%; margin-top: 20px;" onclick="alert('Template applied! You can now add these items to your rooms.')">
            USE THIS PACKAGE
        </button>
    `;
    
    modal.style.display = 'flex';
    document.getElementById('templatePanel').style.display = 'none';
}

function closePreviewModal() {
    document.getElementById('templatePreviewModal').style.display = 'none';
}
