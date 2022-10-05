import React, { useEffect, useState } from 'react'
import SelectorInputField from '../SelectorInputField'

const options = {
    "mama": {
        "t": {
            TX: 'TX',
            T0: 'T0',
        },
        "n": {
            NX: 'NX',
            N0: 'N0',
        },
        "m": {
            MX: 'MX',
            M0: 'M0',
        },
        "estadio": {
            O: "O",
            IA: "IA",
            IB: "IB",
        }
    },
    "prostata": {
        "t": {
            TX: 'TX',
            T0: 'T0',
        },
        "n": {
            NX: 'NX',
            N0: 'N0',
        },
        "m": {
            MX: 'MX',
            M0: 'M0',
        },
        "estadio": {
            O: "O",
            IA: "IA",
            IB: "IB",
        }
    },
    "pulmon": {
        "t": {
            TX: 'TX',
            T0: 'T0',
        },
        "n": {
            NX: 'NX',
            N0: 'N0',
        },
        "m": {
            MX: 'MX',
            M0: 'M0',
        },
        "estadio": {
            O: "O",
            IA: "IA",
            IB: "IB",
        }
    },
    "colon": {
        "t": {
            TX: 'TX',
            T0: 'T0',
        },
        "n": {
            NX: 'NX',
            N0: 'N0',
        },
        "m": {
            MX: 'MX',
            M0: 'M0',
        },
        "estadio": {
            O: "Colon O",
            IA: "IA",
            IB: "IB",
        }
    },
    "cervix": {
        "t": {
            TX: 'TX',
            T0: 'T0',
        },
        "n": {
            NX: 'NX',
            N0: 'N0',
        },
        "m": {
            MX: 'MX',
            M0: 'M0',
        },
        "estadio": {
            O: "O",
            IA: "IA",
            IB: "IB",
        }
    },
    "gastrico": {
        "t": {
            TX: 'TX',
            T0: 'T0',
        },
        "n": {
            NX: 'NX',
            N0: 'N0',
        },
        "m": {
            MX: 'MX',
            M0: 'M0',
        },
        "estadio": {
            O: "O",
            IA: "IA",
            IB: "IB",
        }
    },
    "higado": {
        "t": {
            TX: 'TX',
            T0: 'T0',
        },
        "n": {
            NX: 'NX',
            N0: 'N0',
        },
        "m": {
            MX: 'MX',
            M0: 'M0',
        },
        "estadio": {
            O: "O",
            IA: "IA",
            IB: "IB",
        }
    },
    "utero": {
        "t": {
            TX: 'TX',
            T0: 'T0',
        },
        "n": {
            NX: 'NX',
            N0: 'N0',
        },
        "m": {
            MX: 'MX',
            M0: 'M0',
        },
        "estadio": {
            O: "O",
            IA: "IA",
            IB: "IB",
        }
    },
    "ovario": {
        "t": {
            TX: 'TX',
            T0: 'T0',
        },
        "n": {
            NX: 'NX',
            N0: 'N0',
        },
        "m": {
            MX: 'MX',
            M0: 'M0',
        },
        "estadio": {
            O: "O",
            IA: "IA",
            IB: "IB",
        }
    },
}

const ConditionalSelectInputField = ({ properties, values, onChange }) => {

    const [currentOption, setCurrentOption] = useState(options[values.tumor] ?? [])

    useEffect(() => {
        setCurrentOption(options[values.tumor] ?? [])
    }, [values.tumor])

    return (
        <SelectorInputField
            type={properties.type}
            value={values[properties.name]}
            label={properties.label}
            name={properties.name}
            onChange={onChange}
            options={currentOption[properties.name]}
        />
    )
}


export default ConditionalSelectInputField