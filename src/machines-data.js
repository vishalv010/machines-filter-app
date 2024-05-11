export const BUTTON_STATUS = {
    ACCEPTABLE: 'Acceptable',
    MONITOR: 'Monitor',
    ALARM: 'Alarm',
    DANGER: 'Danger',
    NO_STATUS: 'No Status'

}
export const FILTER_BUTTONS = [
    {
        name: BUTTON_STATUS.ACCEPTABLE,
        bgColor: '#13aa52',
    },
    {
        name: BUTTON_STATUS.MONITOR,
        bgColor: '#6bae24',
    },
    {
        name: BUTTON_STATUS.ALARM,
        bgColor: '#f28f0e',
    },
    {
        name: BUTTON_STATUS.DANGER,
        bgColor: '#ed5249',
    },
    {
        name: BUTTON_STATUS.NO_STATUS,
        bgColor: '#B2BEB5',
    }
];

export const MACHINES = [
    {
        name: 'Angle Grinder',
        status: BUTTON_STATUS.ACCEPTABLE,
        model: 'T500',
        manufacturer: 'Okuma',
        type: 'Manual/Engine'
    },
    {
        name: 'Twin Screw Extruder',
        status: BUTTON_STATUS.MONITOR,
        model: 'SL-7A',
        manufacturer: 'Loewy',
        type: 'Aluminum Direct'
    },
    {
        name: 'Aging Furnace',
        status: BUTTON_STATUS.ACCEPTABLE,
        model: 'C18',
        manufacturer: 'Flinn & Dreffein',
        type: 'Rotary Furnace'
    },
    {
        name: 'Induction Billet Heater',
        status: BUTTON_STATUS.ALARM,
        model: 'C87',
        manufacturer: 'Kbg Induction',
        type: 'Automatic'
    },
    {
        name: 'Knuckle Joint Presses',
        status: BUTTON_STATUS.ACCEPTABLE,
        model: 'AC92',
        manufacturer: 'Schuler',
        type: 'Electomechanical'
    },
    {
        name: 'Profile Straighteners',
        status: BUTTON_STATUS.MONITOR,
        type: 'Semi Automatic',
        model: 'GH4',
        manufacturer: 'Heckert'
    },
    {
        name: 'Bar Shears',
        status: BUTTON_STATUS.MONITOR,
        type: 'Bar Shear',
        model: '740-2630',
        manufacturer: 'AMD'
    },
    {
        name: 'Centerless Grinder',
        status: BUTTON_STATUS.DANGER,
        model: 'CLB-1V',
        type: 'In-Feed',
        manufacturer: 'Komatsu NTC',
    },
    {
        name: 'Hot Forge Upsetters',
        status: 'Smeral',
        model: 'SK-5A',
        builder: 'Etchells',
        type: 'Hydraulic'
    },
    {
        name: 'Cross Wedge Roller',
        status: BUTTON_STATUS.DANGER,
        type: 'Cylindrical Die',
        manufacturer: 'Metalpres',
        model: 'UL80 N'
    },
    {
        name: 'Section Straighteners',
        status: BUTTON_STATUS.MONITOR,
        model: 'CH-2',
        manufacturer: 'Medart',
        type: 'Shape Straightener'
    },
    {
        name: 'Roll Grinder',
        status: BUTTON_STATUS.ACCEPTABLE,
        manufacturer: 'Chruchill',
        model: 'TWB CNC',
        type: 'Roll Grinder'
    },
    {
        name:'Tube & Pipe Benders',
        status: BUTTON_STATUS.DANGER,
        type: 'U-Tube Bender',
        model: 'T98',
        manufacturer: 'Eaton Leonard'
    },
    {
        name: 'Forging Rolls',
        status: BUTTON_STATUS.NO_STATUS,
        type: 'Mechanical',
        manufacturer: 'National',
        model: '#4 Reduceroll'
    },
    {
        name: 'Optical Emission Spectrometer',
        status: BUTTON_STATUS.MONITOR,
        type: 'Digital',
        manufacturer: 'ThorLabs',
        model: 'SMF-28 Ultra'
    },
    {
        name: 'Hydraulic Press',
        status: BUTTON_STATUS.DANGER,
        type: 'Hydraulic',
        manufacturer: 'Hitachi',
        model: 'CF-29'
    },
    {
        name: 'Ring Rolling Mills',
        status: BUTTON_STATUS.ALARM,
        type: 'Radial Axial new 1991',
        manufacturer: 'Mitsubishi',
        model: 'EG-34'
    },
    {
        name: 'Forging Hammers',
        status: BUTTON_STATUS.ACCEPTABLE,
        type: 'Hydraulic',
        manufacturer: 'Beche',
        model: 'AG-29'
    },
    {
        name: 'Large Plate Levelers',
        status: BUTTON_STATUS.DANGER,
        type: 'Mechanical',
        manufacturer: 'Sket',
        model: 'A7L9R-2.5/6.5'
    },
    {
        name: 'CNC Lathe Machine',
        status: BUTTON_STATUS.ACCEPTABLE,
        type: 'Large Spdl Hole Oil Country Lathe',
        manufacturer: 'IKEGAI',
        model: 'ANC 75'
    }, 
    {
        name: 'Cold Pilger Mills',
        status: BUTTON_STATUS.MONITOR,
        type: 'Copper 4-Hi Reversing',
        manufacturer: 'Skoda',
        model: 'SL63'
    },
    {
        name: 'Centerless Bar Peelers',
        status: BUTTON_STATUS.ALARM,
        type: 'Electronic',
        model: 'MB 270',
        manufacturer: 'Medart Blaw Knox'
    },
    {
        name: 'Gensets',
        status: BUTTON_STATUS.NO_STATUS,
        type: 'Diesel Gensets',
        model: '3516C',
        manufacturer: 'Caterpillar'
    }
]