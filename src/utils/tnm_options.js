export const evaluateTNM = (organ, tumor, nodule, metastasis) => {
	if (!organ || !tumor || !nodule || !metastasis)
		return { no_value: 'Seleccione una combinacion de TNM' };

	const optionsList = tnmOptions[organ];

	if (
		!Object.keys(optionsList.tumor).includes(tumor) ||
		!Object.keys(optionsList.nodule).includes(nodule) ||
		!Object.keys(optionsList.metastasis).includes(metastasis)
	) {
		return { no_value: 'Seleccione una combinacion de TNM' };
	}

	const filterByTumor = Object.keys(optionsList.cancerStage).filter(
		(stageKey) =>
			optionsList.cancerStage[stageKey].validation.find(
				(obj) =>
					(obj.tumor === tumor || obj.tumor === 'ANYT') &&
					(obj.nodule === nodule || obj.nodule === 'ANYN') &&
					(obj.metastasis === metastasis || obj.metastasis === 'ANYM'),
			),
	);

	if (filterByTumor.length === 0)
		return { no_exist: 'No existe estadio con esa combinacion valida' };
	let optionsToReturn = {};
	filterByTumor.forEach((stageId) => {
		optionsToReturn = {
			...optionsToReturn,
			[stageId]: optionsList.cancerStage[stageId].label,
		};
	});

	return optionsToReturn;
};

export const tnmOptions = {
	Mama: {
		tumor: {
			TX: 'TX',
			T0: 'T0',
			Tis: 'Tis',
			T1: 'T1',
			T1a: 'T1a',
			T1b: 'T1b',
			T1c: 'T1c',
			T2: 'T2',
			T3: 'T3',
			T4: 'T4',
			T4a: 'T4a',
			T4b: 'T4b',
			T4c: 'T4c',
			T4dv: 'T4dv',
			T1mi: 'T1mi',
			TisDCIS: 'Tis (DCIS)',
			TisCLIS: 'Tis (CLIS)',
			TisPaget: 'Tis (de Paget)',
		},
		nodule: {
			NX: 'Nx',
			N0: 'N0',
			N1: 'N1',
			N2: 'N2',
			N2a: 'N2a',
			N2b: 'N2b',
			N3: 'N3',
			N3a: 'N3a',
			N3b: 'N3b',
			N3c: 'N3c',
		},
		metastasis: {
			M0: 'M0',
			// cM0Mic:'cM0 (Microscopico)',
			M1: 'M1',
		},
		cancerStage: {
			Estadio0: {
				label: 'Estadio 0',
				validation: [{ tumor: 'Tis', nodule: 'N0', metastasis: 'M0' }],
			},
			EstadioIA: {
				label: 'Estadio IA',
				validation: [{ tumor: 'T1', nodule: 'N0', metastasis: 'M0' }],
			},
			EstadioIB: {
				label: 'Estadio IB',
				validation: [
					{ tumor: 'T0', nodule: 'N1MI', metastasis: 'M0' },
					{ tumor: 'T1', nodule: 'N1MI', metastasis: 'M0' },
				],
			},
			EstadioIIA: {
				label: 'Estadio IIA',
				validation: [
					{ tumor: 'T0', nodule: 'N1', metastasis: 'M0' },
					{ tumor: 'T1', nodule: 'N1', metastasis: 'M0' },
					{ tumor: 'T2', nodule: 'N0', metastasis: 'M0' },
				],
			},
			EstadioIIB: {
				label: 'Estadio IIB',
				validation: [
					{ tumor: 'T2', nodule: 'N1', metastasis: 'M0' },
					{ tumor: 'T3', nodule: 'N0', metastasis: 'M0' },
				],
			},
			EstadioIIIA: {
				label: 'Estadio IIIA',
				validation: [
					{ tumor: 'T0', nodule: 'N2', metastasis: 'M0' },
					{ tumor: 'T1', nodule: 'N2', metastasis: 'M0' },
					{ tumor: 'T2', nodule: 'N2', metastasis: 'M0' },
					{ tumor: 'T3', nodule: 'N1', metastasis: 'M0' },
					{ tumor: 'T3', nodule: 'N2', metastasis: 'M0' },
				],
			},
			EstadioIIIB: {
				label: 'Estadio IIIB',
				validation: [
					{ tumor: 'T4', nodule: 'N0', metastasis: 'M0' },
					{ tumor: 'T4', nodule: 'N1', metastasis: 'M0' },
					{ tumor: 'T4', nodule: 'N2', metastasis: 'M0' },
				],
			},
			EstadioIIIC: {
				label: 'Estadio IIIC',
				validation: [{ tumor: 'ANYT', nodule: 'N3', metastasis: 'M0' }],
			},
			EstadioIV: {
				label: 'Estadio IV',
				validation: [{ tumor: 'ANYT', nodule: 'ANYN', metastasis: 'M1' }],
			},
		},
	},
	Pulmón: {
		tumor: {
			TX: 'TX',
			T0: 'T0',
			T1: 'T1',
			T1a: 'T1a',
			T1ami: 'T1a (mi)',
			T1b: 'T1b',
			T1c: 'T1c',
			T2: 'T2',
			T2a: 'T2a',
			T2b: 'T2b',
			T2c: 'T2c',
			T3: 'T3',
			T4: 'T4',
		},
		nodule: {
			// Nx:'Nx',
			N0: 'N0',
			N1: 'N1',
			N2: 'N2',
			N3: 'N3',
		},
		metastasis: {
			M0: 'M0',
			// cM0Mic:'cM0 (Microscopico)',
			// M1:'M1',
			// M1a:'M1a',
			// M1b:'M1b',
			// M1c:'M1c',
		},
		cancerStage: {
			EstadioIA1: {
				label: 'Estadio IA1',
				validation: [{ tumor: 'T1ami', nodule: 'N0', metastasis: 'M0' }],
			},
			EstadioIA2: {
				label: 'Estadio IA2',
				validation: [{ tumor: 'T1b', nodule: 'N0', metastasis: 'M0' }],
			},
			EstadioIA3: {
				label: 'Estadio IA3',
				validation: [{ tumor: 'T1c', nodule: 'N0', metastasis: 'M0' }],
			},
			EstadioIB: {
				label: 'Estadio IB',
				validation: [{ tumor: 'T2a', nodule: 'N0', metastasis: 'M0' }],
			},
			EstadioIIA: {
				label: 'Estadio IIA',
				validation: [{ tumor: 'T2b', nodule: 'N0', metastasis: 'M0' }],
			},
			EstadioIIB: {
				label: 'Estadio IBA',
				validation: [
					{ tumor: 'T2a', nodule: 'N1', metastasis: 'M0' },
					{ tumor: 'T2b', nodule: 'N1', metastasis: 'M0' },
					{ tumor: 'T2c', nodule: 'N1', metastasis: 'M0' },
					{ tumor: 'T3', nodule: 'N0', metastasis: 'M0' },
				],
			},
			EstadioIIIA: {
				label: 'Estadio IIIA',
				validation: [
					{ tumor: 'T1a', nodule: 'N2', metastasis: 'M0' },
					{ tumor: 'T1b', nodule: 'N2', metastasis: 'M0' },
					{ tumor: 'T1c', nodule: 'N2', metastasis: 'M0' },
					{ tumor: 'T2a', nodule: 'N2', metastasis: 'M0' },
					{ tumor: 'T2b', nodule: 'N2', metastasis: 'M0' },
					{ tumor: 'T3', nodule: 'N1', metastasis: 'M0' },
					{ tumor: 'T4', nodule: 'N2', metastasis: 'M0' },
				],
			},
			EstadioIIIB: {
				label: 'Estadio IIIB',
				validation: [
					{ tumor: 'T1a', nodule: 'N3', metastasis: 'M0' },
					{ tumor: 'T1b', nodule: 'N3', metastasis: 'M0' },
					{ tumor: 'T1c', nodule: 'N3', metastasis: 'M0' },
					{ tumor: 'T2a', nodule: 'N3', metastasis: 'M0' },
					{ tumor: 'T2b', nodule: 'N3', metastasis: 'M0' },
					{ tumor: 'T3', nodule: 'N2', metastasis: 'M0' },
					{ tumor: 'T4', nodule: 'N2', metastasis: 'M0' },
				],
			},
		},
	},
	Colon: {
		tumor: {
			TX: 'TX',
			T0: 'T0',
			Tis: 'Tis',
			T1: 'T1',
			T2: 'T2',
			T3: 'T3',
			T4: 'T4',
			T4a: 'T4a',
			T4b: 'T4b',
		},
		nodule: {
			NX: 'Nx',
			N0: 'N0',
			N1: 'N1',
			N1a: 'N1a',
			N1b: 'N1b',
			N1c: 'N1c',
			N2: 'N2',
			N2a: 'N2a',
			N2b: 'N2b',
		},
		metastasis: {
			M0: 'M0',
			M1: 'M1',
			M1a: 'M1a',
			M1b: 'M1b',
			M1c: 'M1c',
		},
		cancerStage: {
			Estadio0: {
				label: 'Estadio 0',
				validation: [{ tumor: 'Tis', nodule: 'N0', metastasis: 'M0' }],
			},
			EstadioIA1: {
				label: 'Estadio I',
				validation: [
					{ tumor: 'T1', nodule: 'N0', metastasis: 'M0' },
					{ tumor: 'T2', nodule: 'N0', metastasis: 'M0' },
				],
			},
			EstadioIIA: {
				label: 'Estadio IIA',
				validation: [{ tumor: 'T3', nodule: 'N0', metastasis: 'M0' }],
			},
			EstadioIIB: {
				label: 'Estadio IIB',
				validation: [{ tumor: 'T4a', nodule: 'N0', metastasis: 'M0' }],
			},
			EstadioIIC: {
				label: 'Estadio IIC',
				validation: [{ tumor: 'T4b', nodule: 'N0', metastasis: 'M0' }],
			},
			EstadioIIIA: {
				label: 'Estadio IIIA',
				validation: [
					{ tumor: 'T1', nodule: 'N1', metastasis: 'M0' },
					{ tumor: 'T2', nodule: 'N1', metastasis: 'M0' },
					{ tumor: 'T1', nodule: 'N1a', metastasis: 'M0' },
					{ tumor: 'T1', nodule: 'N1b', metastasis: 'M0' },
					{ tumor: 'T1', nodule: 'N1c', metastasis: 'M0' },
					{ tumor: 'T2', nodule: 'N1a', metastasis: 'M0' },
					{ tumor: 'T2', nodule: 'N1b', metastasis: 'M0' },
					{ tumor: 'T2', nodule: 'N1c', metastasis: 'M0' },
				],
			},
			EstadioIIIB: {
				label: 'Estadio IIIB',
				validation: [
					{ tumor: 'T3', nodule: 'N1a', metastasis: 'M0' },
					{ tumor: 'T3', nodule: 'N1b', metastasis: 'M0' },
					{ tumor: 'T3', nodule: 'N1c', metastasis: 'M0' },
					{ tumor: 'T4', nodule: 'N1a', metastasis: 'M0' },
					{ tumor: 'T4', nodule: 'N1b', metastasis: 'M0' },
					{ tumor: 'T4', nodule: 'N1c', metastasis: 'M0' },
					{ tumor: 'T2', nodule: 'N2a', metastasis: 'M0' },
					{ tumor: 'T3', nodule: 'N2b', metastasis: 'M0' },
				],
			},
			EstadioIIIC: {
				label: 'Estadio IIIC',
				validation: [
					{ tumor: 'T4a', nodule: 'N2a', metastasis: 'M0' },
					{ tumor: 'T3', nodule: 'N2b', metastasis: 'M0' },
					{ tumor: 'T4a', nodule: 'N2b', metastasis: 'M0' },
					{ tumor: 'T4b', nodule: 'N1', metastasis: 'M0' },
					{ tumor: 'T4b', nodule: 'N2', metastasis: 'M0' },
				],
			},
			EstadioIVA: {
				label: 'Estadio IVA',
				validation: [{ tumor: 'ANYT', nodule: 'ANYN', metastasis: 'M1a' }],
			},
			EstadioIVB: {
				label: 'Estadio IVB',
				validation: [{ tumor: 'ANYT', nodule: 'ANYN', metastasis: 'M1b' }],
			},
			EstadioIVC: {
				label: 'Estadio IVC',
				validation: [{ tumor: 'ANYT', nodule: 'ANYN', metastasis: 'M1c' }],
			},
		},
	},
	Cervix: {
		tumor: {
			TX: 'TX',
			T0: 'T0',
			T1: 'T1',
			T1a: 'T1a',
			T1a1: 'T1a1',
			T1a2: 'T1a2',
			T1b: 'T1b',
			T1b1: 'T1b1',
			T1b2: 'T1b2',
			T2: 'T2',
			T2a: 'T2a',
			T2a1: 'T2a1',
			T2b: 'T2b',
			T3: 'T3',
			T3a: 'T3a',
			T3b: 'T3b',
			T4: 'T4',
		},
		nodule: {
			NX: 'Nx',
			N0: 'N0',
			N0mi: 'N0 (Microscopio)',
			N1: 'N1',
			N1mi: 'N1 (Microscopio)',
			N1a: 'N1a',
			N2: 'N2',
			N2mi: 'N2 (Microscopio)',
			N2a: 'N2a',
		},
		metastasis: {
			M0: 'M0',
			M1: 'M1',
		},
		cancerStage: {
			EstadioI: {
				label: 'Estadio I',
				validation: [{ tumor: 'T1', nodule: 'N0', metastasis: 'M0' }],
			},
			EstadioIA: {
				label: 'Estadio IA',
				validation: [{ tumor: 'T1a', nodule: 'N0', metastasis: 'M0' }],
			},
			EstadioIA1: {
				label: 'Estadio IA1',
				validation: [{ tumor: 'T1a1', nodule: 'N0', metastasis: 'M0' }],
			},
			EstadioIA2: {
				label: 'Estadio IA2',
				validation: [{ tumor: 'T1a2', nodule: 'N0', metastasis: 'M0' }],
			},
			EstadioIB: {
				label: 'Estadio IB',
				validation: [{ tumor: 'T1b', nodule: 'N0', metastasis: 'M0' }],
			},
			EstadioIB1: {
				label: 'Estadio IB1',
				validation: [{ tumor: 'T1b1', nodule: 'N0', metastasis: 'M0' }],
			},
			EstadioIB2: {
				label: 'Estadio IB2',
				validation: [{ tumor: 'T1b2', nodule: 'N0', metastasis: 'M0' }],
			},
			EstadioIB3: {
				label: 'Estadio IB3',
				validation: [{ tumor: 'T1b3', nodule: 'N0', metastasis: 'M0' }],
			},
			EstadioII: {
				label: 'Estadio II',
				validation: [{ tumor: 'T2', nodule: 'N0', metastasis: 'M0' }],
			},
			EstadioIIA: {
				label: 'Estadio IIA',
				validation: [{ tumor: 'T2a', nodule: 'N0', metastasis: 'M0' }],
			},
			EstadioIIA1: {
				label: 'Estadio IIA1',
				validation: [{ tumor: 'T2a1', nodule: 'N0', metastasis: 'M0' }],
			},
			EstadioIIA2: {
				label: 'Estadio II',
				validation: [{ tumor: 'T2a2', nodule: 'N0', metastasis: 'M0' }],
			},
			EstadioIIB: {
				label: 'Estadio II',
				validation: [{ tumor: 'T2b', nodule: 'N0', metastasis: 'M0' }],
			},
			EstadioIII: {
				label: 'Estadio III',
				validation: [{ tumor: 'T3', nodule: 'N0', metastasis: 'M0' }],
			},
			EstadioIIIA: {
				label: 'Estadio IIIA',
				validation: [{ tumor: 'T3a', nodule: 'N0', metastasis: 'M0' }],
			},
			EstadioIIIB: {
				label: 'Estadio IIIB',
				validation: [{ tumor: 'T3b', nodule: 'N0', metastasis: 'M0' }],
			},

			EstadioIIIC1: {
				label: 'Estadio IIIC1',
				validation: [
					{ tumor: 'TX', nodule: 'N1', metastasis: 'M0' },
					{ tumor: 'T0', nodule: 'N1', metastasis: 'M0' },
					{ tumor: 'T1', nodule: 'N1', metastasis: 'M0' },
					{ tumor: 'T2', nodule: 'N1', metastasis: 'M0' },
					{ tumor: 'T3', nodule: 'N1', metastasis: 'M0' },
				],
			},
			EstadioIIIC2: {
				label: 'Estadio IIIC2',
				validation: [
					{ tumor: 'TX', nodule: 'N2', metastasis: 'M0' },
					{ tumor: 'T0', nodule: 'N2', metastasis: 'M0' },
					{ tumor: 'T1', nodule: 'N2', metastasis: 'M0' },
					{ tumor: 'T2', nodule: 'N2', metastasis: 'M0' },
					{ tumor: 'T3', nodule: 'N2', metastasis: 'M0' },
				],
			},
			EstadioIVA: {
				label: 'Estadio IVA',
				validation: [{ tumor: 'T4', nodule: 'ANYN', metastasis: 'M0' }],
			},
			EstadioIVB: {
				label: 'Estadio IVB',
				validation: [{ tumor: 'ANYT', nodule: 'ANYN', metastasis: 'M1' }],
			},
		},
	},
	Gastrico: {
		tumor: {
			TX: 'TX',
			T0: 'T0',
			T1: 'T1',
			T1a: 'T1a',
			T1b: 'T1b',
			T2: 'T2',
			T3: 'T3',
			T4: 'T4',
			T4a: 'T4a',
			T4b: 'T4b',
		},
		nodule: {
			NX: 'Nx',
			N0: 'N0',
			N1: 'N1',
			N2: 'N2',
			N3: 'N3',
			N3a: 'N3a',
			N3b: 'N3b',
		},
		metastasis: {
			M0: 'M0',
			M1: 'M1',
		},
		cancerStage: {
			Estadio0: {
				label: 'Estadio 0',
				validation: [{ tumor: 'TX', nodule: 'N0', metastasis: 'M0' }],
			},
			EstadioI: {
				label: 'Estadio I',
				validation: [
					{ tumor: 'T1', nodule: 'N0', metastasis: 'M0' },
					{ tumor: 'T2', nodule: 'N0', metastasis: 'M0' },
				],
			},
			EstadioIIA: {
				label: 'Estadio IIA',
				validation: [
					{ tumor: 'T1', nodule: 'N1', metastasis: 'M0' },
					{ tumor: 'T1', nodule: 'N2', metastasis: 'M0' },
					{ tumor: 'T1', nodule: 'N3', metastasis: 'M0' },
					{ tumor: 'T2', nodule: 'N1', metastasis: 'M0' },
					{ tumor: 'T2', nodule: 'N2', metastasis: 'M0' },
					{ tumor: 'T2', nodule: 'N3', metastasis: 'M0' },
				],
			},
			EstadioIIB: {
				label: 'Estadio IIB',
				validation: [
					{ tumor: 'T3', nodule: 'N0', metastasis: 'M0' },
					{ tumor: 'T4a', nodule: 'N0', metastasis: 'M0' },
				],
			},
			EstadioIII: {
				label: 'Estadio III',
				validation: [
					{ tumor: 'T3', nodule: 'N1', metastasis: 'M0' },
					{ tumor: 'T3', nodule: 'N2', metastasis: 'M0' },
					{ tumor: 'T3', nodule: 'N3', metastasis: 'M0' },
					{ tumor: 'T4a', nodule: 'N1', metastasis: 'M0' },
					{ tumor: 'T4a', nodule: 'N2', metastasis: 'M0' },
					{ tumor: 'T4a', nodule: 'N3', metastasis: 'M0' },
				],
			},
			EstadioIVA: {
				label: 'Estadio IVA',
				validation: [{ tumor: 'T4b', nodule: 'ANYN', metastasis: 'M0' }],
			},
			EstadioIVB: {
				label: 'Estadio IVB',
				validation: [{ tumor: 'ANYT', nodule: 'ANYN', metastasis: 'M1' }],
			},
		},
	},
	Higado: {
		tumor: {
			TX: 'TX',
			T0: 'T0',
			T1: 'T1',
			T2: 'T2',
			T3a: 'T3a',
			T3b: 'T3b',
			T4: 'T4',
		},
		nodule: {
			// NX:'Nx',
			N0: 'N0',
			N1: 'N1',
		},
		metastasis: {
			M0: 'M0',
			M1: 'M1',
		},
		cancerStage: {
			EstadioI: {
				label: 'Estadio I',
				validation: [{ tumor: 'T1', nodule: 'N0', metastasis: 'M0' }],
			},
			EstadioII: {
				label: 'Estadio II',
				validation: [{ tumor: 'T2', nodule: 'N0', metastasis: 'M0' }],
			},
			EstadioIIIA: {
				label: 'Estadio IIIA',
				validation: [{ tumor: 'T3a', nodule: 'N0', metastasis: 'M0' }],
			},
			EstadioIIIB: {
				label: 'Estadio IIIB',
				validation: [{ tumor: 'T3b', nodule: 'N0', metastasis: 'M0' }],
			},
			EstadioIIIC: {
				label: 'Estadio IIIC',
				validation: [{ tumor: 'T4', nodule: 'N0', metastasis: 'M0' }],
			},
			EstadioIVA: {
				label: 'Estadio IVA',
				validation: [{ tumor: 'ANYT', nodule: 'N1', metastasis: 'M0' }],
			},
			EstadioIVB: {
				label: 'Estadio IVB',
				validation: [{ tumor: 'ANYT', nodule: 'N1', metastasis: 'M1' }],
			},
		},
	},
	Utero: {
		tumor: {
			TX: 'TX',
			T0: 'T0',
			T1: 'T1',
			T2: 'T2',
			T3: 'T3',
			T4: 'T4',
		},
		nodule: {
			// NX:'Nx',
			N0: 'N0',
			N1: 'N1',
			N1a: 'N1a',
			N2: 'N2',
			N1mi: 'N1 (Microscopico)',
			N2mi: 'N2 (Microscopico)',
		},
		metastasis: {
			M0: 'M0',
			M1: 'M1',
		},
		cancerStage: {
			EstadioI: {
				label: 'Estadio I',
				validation: [{ tumor: 'T1', nodule: 'N0', metastasis: 'M0' }],
			},
			EstadioIA: {
				label: 'Estadio IA',
				validation: [{ tumor: 'T1a', nodule: 'N0', metastasis: 'M0' }],
			},
			EstadioIB: {
				label: 'Estadio IB',
				validation: [{ tumor: 'T1b', nodule: 'N0', metastasis: 'M0' }],
			},
			EstadioII: {
				label: 'Estadio II',
				validation: [{ tumor: 'T2', nodule: 'N0', metastasis: 'M0' }],
			},
			EstadioIII: {
				label: 'Estadio III',
				validation: [{ tumor: 'T3', nodule: 'N0', metastasis: 'M0' }],
			},
			EstadioIIIA: {
				label: 'Estadio IIIA',
				validation: [{ tumor: 'T3a', nodule: 'N0', metastasis: 'M0' }],
			},
			EstadioIIIB: {
				label: 'Estadio IIIB',
				validation: [{ tumor: 'T3b', nodule: 'N0', metastasis: 'M0' }],
			},
			EstadioIIIC: {
				label: 'Estadio IIIC',
				validation: [{ tumor: 'T1', nodule: 'N1', metastasis: 'M0' }],
			},
			EstadioIIIC1: {
				label: 'Estadio IIIC1',
				validation: [
					{ tumor: 'T1', nodule: 'N1', metastasis: 'M0' },
					{ tumor: 'T1', nodule: 'N1mi', metastasis: 'M0' },
					{ tumor: 'T1', nodule: 'N1a', metastasis: 'M0' },
					{ tumor: 'T2', nodule: 'N1', metastasis: 'M0' },
					{ tumor: 'T2', nodule: 'N1mi', metastasis: 'M0' },
					{ tumor: 'T2', nodule: 'N1a', metastasis: 'M0' },
					{ tumor: 'T3', nodule: 'N1', metastasis: 'M0' },
					{ tumor: 'T3', nodule: 'N1mi', metastasis: 'M0' },
					{ tumor: 'T3', nodule: 'N1a', metastasis: 'M0' },
				],
			},
			EstadioIIIC2: {
				label: 'Estadio IIIC2',
				validation: [
					{ tumor: 'T1', nodule: 'N2', metastasis: 'M0' },
					{ tumor: 'T1', nodule: 'N2mi', metastasis: 'M0' },
					{ tumor: 'T1', nodule: 'N2a', metastasis: 'M0' },
					{ tumor: 'T2', nodule: 'N2', metastasis: 'M0' },
					{ tumor: 'T2', nodule: 'N2mi', metastasis: 'M0' },
					{ tumor: 'T2', nodule: 'N2a', metastasis: 'M0' },
					{ tumor: 'T3', nodule: 'N2', metastasis: 'M0' },
					{ tumor: 'T3', nodule: 'N2mi', metastasis: 'M0' },
					{ tumor: 'T3', nodule: 'N2a', metastasis: 'M0' },
				],
			},
			EstadioIVA: {
				label: 'Estadio IVA',
				validation: [{ tumor: 'T4', nodule: 'ANYN', metastasis: 'M0' }],
			},
			EstadioIVB: {
				label: 'Estadio IVB',
				validation: [{ tumor: 'ANYT', nodule: 'ANYN', metastasis: 'M1' }],
			},
		},
	},
	Ovario: {
		tumor: {
			TX: 'TX',
			T0: 'T0',
			T1: 'T1',
			T2: 'T2',
			T3: 'T3',
			T4: 'T4',
		},
		nodule: {
			// NX:'Nx',
			N0: 'N0',
			N1: 'N1',
			N1a: 'N1a',
			N1b: 'N1b',
		},
		metastasis: {
			M0: 'M0',
			M1: 'M1',
			M1a: 'M1a',
			M1b: 'M1b',
		},
		cancerStage: {
			EstadioI: {
				label: 'Estadio I',
				validation: [{ tumor: 'T1', nodule: 'N0', metastasis: 'M0' }],
			},
			EstadioIA: {
				label: 'Estadio IA',
				validation: [{ tumor: 'T1a', nodule: 'N0', metastasis: 'M0' }],
			},
			EstadioIB: {
				label: 'Estadio IB',
				validation: [{ tumor: 'T1b', nodule: 'N0', metastasis: 'M0' }],
			},
			EstadioIC: {
				label: 'Estadio IC',
				validation: [{ tumor: 'T1c', nodule: 'N0', metastasis: 'M0' }],
			},
			EstadioII: {
				label: 'Estadio II',
				validation: [{ tumor: 'T2', nodule: 'N0', metastasis: 'M0' }],
			},
			EstadioIIA: {
				label: 'Estadio IIA',
				validation: [{ tumor: 'T2a', nodule: 'N0', metastasis: 'M0' }],
			},
			EstadioIIB: {
				label: 'Estadio IIB',
				validation: [{ tumor: 'T2b', nodule: 'N0', metastasis: 'M0' }],
			},
			EstadioIIIA1: {
				label: 'Estadio IIIA1',
				validation: [
					{ tumor: 'T1', nodule: 'N1', metastasis: 'M0' },
					{ tumor: 'T2', nodule: 'N1', metastasis: 'M0' },
				],
			},
			EstadioIIIA2: {
				label: 'Estadio IIIA2',
				validation: [
					{ tumor: 'T3a', nodule: 'NX', metastasis: 'M0' },
					{ tumor: 'T3a', nodule: 'N0', metastasis: 'M0' },
					{ tumor: 'T3a', nodule: 'N1', metastasis: 'M0' },
				],
			},
			EstadioIIIB: {
				label: 'Estadio IIIB',
				validation: [
					{ tumor: 'T3b', nodule: 'NX', metastasis: 'M0' },
					{ tumor: 'T3b', nodule: 'N0', metastasis: 'M0' },
					{ tumor: 'T3b', nodule: 'N1', metastasis: 'M0' },
				],
			},
			EstadioIIIC: {
				label: 'Estadio IIIC',
				validation: [
					{ tumor: 'T3c', nodule: 'NX', metastasis: 'M0' },
					{ tumor: 'T3c', nodule: 'N0', metastasis: 'M0' },
					{ tumor: 'T3c', nodule: 'N1', metastasis: 'M0' },
				],
			},
			EstadioIV: {
				label: 'Estadio IV',
				validation: [{ tumor: 'ANYT', nodule: 'ANYN', metastasis: 'M1' }],
			},
			EstadioIVA: {
				label: 'Estadio IVA',
				validation: [{ tumor: 'ANYT', nodule: 'ANYN', metastasis: 'M1a' }],
			},
			EstadioIVB: {
				label: 'Estadio IVB',
				validation: [{ tumor: 'ANYT', nodule: 'ANYN', metastasis: 'M1b' }],
			},
		},
	},
	Tiroides: {
		tumor: {
			TX: 'TX',
			T0: 'T0',
			T1: 'T1',
			T1a: 'T1a',
			T1b: 'T1b',
			T2: 'T2',
			T3: 'T3',
			T3a: 'T3a',
			T3b: 'T3b',
			T4: 'T4',
			T4a: 'T4a',
			T4b: 'T4b',
		},
		nodule: {
			// NX:'Nx',
			N0: 'N0',
			N0a: 'N0a',
			N0b: 'N0b',
			N1: 'N1',
			N1a: 'N1a',
			N1b: 'N1b',
		},
		metastasis: {
			M0: 'M0',
			M1: 'M1',
		},
		cancerStage: {
			EstadioI: {
				label: 'Estadio I',
				validation: [
					{ tumor: 'T1', nodule: 'N0', metastasis: 'M0' },
					{ tumor: 'T2', nodule: 'N0', metastasis: 'M0' },
					{ tumor: 'T1', nodule: 'NX', metastasis: 'M0' },
					{ tumor: 'T2', nodule: 'NX', metastasis: 'M0' },
				],
			},
			EstadioII: {
				label: 'Estadio II',
				validation: [
					{ tumor: 'T1', nodule: 'N1', metastasis: 'M0' },
					{ tumor: 'T2', nodule: 'N1', metastasis: 'M0' },
					{ tumor: 'T3a', nodule: 'ANYN', metastasis: 'M0' },
					{ tumor: 'T3b', nodule: 'ANYN', metastasis: 'M0' },
				],
			},
			EstadioIII: {
				label: 'Estadio III',
				validation: [{ tumor: 'T4a', nodule: 'ANYN', metastasis: 'M0' }],
			},
			EstadioIV: {
				label: 'Estadio IV',
				validation: [{ tumor: 'T4b', nodule: 'ANYN', metastasis: 'M0' }],
			},
			EstadioIVB: {
				label: 'Estadio IVB',
				validation: [{ tumor: 'ANYT', nodule: 'ANYN', metastasis: 'M1' }],
			},
		},
	},
	Esofago: {
		tumor: {
			TX: 'TX',
			T0: 'T0',
			Tis: 'Tis',
			T1: 'T1',
			T1a: 'T1a',
			T1b: 'T1b',
			T2: 'T2',
			T3: 'T3',
			T4: 'T4',
			T4a: 'T4a',
			T4b: 'T4b',
		},
		nodule: {
			NX: 'Nx',
			N0: 'N0',
			N1: 'N1',
			N2: 'N2',
			N3: 'N3',
		},
		metastasis: {
			M0: 'M0',
			M1: 'M1',
		},
		cancerStage: {
			Estadio0: {
				label: 'Estadio 0',
				validation: [{ tumor: 'Tis', nodule: 'N0', metastasis: 'M0' }],
			},
			EstadioI: {
				label: 'Estadio I',
				validation: [
					{ tumor: 'T1', nodule: 'N0', metastasis: 'M0' },
					{ tumor: 'T1', nodule: 'N1', metastasis: 'M0' },
				],
			},
			EstadioII: {
				label: 'Estadio II',
				validation: [
					{ tumor: 'T2', nodule: 'N0', metastasis: 'M0' },
					{ tumor: 'T2', nodule: 'N1', metastasis: 'M0' },
					{ tumor: 'T3', nodule: 'N0', metastasis: 'M0' },
				],
			},
			EstadioIIA: {
				label: 'Estadio IIA',
				validation: [{ tumor: 'T1', nodule: 'N1', metastasis: 'M0' }],
			},
			EstadioIIB: {
				label: 'Estadio IIB',
				validation: [{ tumor: 'T2', nodule: 'N0', metastasis: 'M0' }],
			},
			EstadioIII: {
				label: 'Estadio III',
				validation: [
					{ tumor: 'T3', nodule: 'N1', metastasis: 'M0' },
					{ tumor: 'T3', nodule: 'N0', metastasis: 'M0' },
					{ tumor: 'T4a', nodule: 'N1', metastasis: 'M0' },
					{ tumor: 'T4a', nodule: 'N0', metastasis: 'M0' },
					{ tumor: 'T2', nodule: 'N1', metastasis: 'M0' },
					{ tumor: 'T1', nodule: 'N2', metastasis: 'M0' },
					{ tumor: 'T2', nodule: 'N2', metastasis: 'M0' },
					{ tumor: 'T3', nodule: 'N2', metastasis: 'M0' },
				],
			},
			EstadioIVA: {
				label: 'Estadio IVA',
				validation: [
					{ tumor: 'T4', nodule: 'N0', metastasis: 'M0' },
					{ tumor: 'T4b', nodule: 'N0', metastasis: 'M0' },
					{ tumor: 'T4', nodule: 'N1', metastasis: 'M0' },
					{ tumor: 'T4b', nodule: 'N1', metastasis: 'M0' },
					{ tumor: 'T4', nodule: 'N2', metastasis: 'M0' },
					{ tumor: 'T4b', nodule: 'N2', metastasis: 'M0' },
					{ tumor: 'T1', nodule: 'N2', metastasis: 'M0' },
					{ tumor: 'T2', nodule: 'N2', metastasis: 'M0' },
					{ tumor: 'T3', nodule: 'N2', metastasis: 'M0' },
					{ tumor: 'T4a', nodule: 'N2', metastasis: 'M0' },
					{ tumor: 'T4', nodule: 'N3', metastasis: 'M0' },
					{ tumor: 'ANYT', nodule: 'N3', metastasis: 'M0' },
				],
			},
			EstadioIVB: {
				label: 'Estadio IVB',
				validation: [{ tumor: 'ANYT', nodule: 'ANYN', metastasis: 'M1' }],
			},
		},
	},
	Vejiga: {
		tumor: {
			TX: 'TX',
			T0: 'T0',
			T1: 'T1',
			T2: 'T2',
			T3: 'T3',
			T4: 'T4',
		},
		nodule: {
			NX: 'Nx',
			N0: 'N0',
			N1: 'N1',
			N2: 'N2',
			N3: 'N3',
		},
		metastasis: {
			M0: 'M0',
			M1: 'M1',
		},
		cancerStage: {
			Estadio0: {
				label: 'Estadio 0',
				validation: [
					{ tumor: 'TX', nodule: 'N0', metastasis: 'M0' },
					{ tumor: 'Tis', nodule: 'N0', metastasis: 'M0' },
				],
			},
			EstadioI: {
				label: 'Estadio I',
				validation: [{ tumor: 'T1', nodule: 'N0', metastasis: 'M0' }],
			},
			EstadioII: {
				label: 'Estadio II',
				validation: [{ tumor: 'T2', nodule: 'N0', metastasis: 'M0' }],
			},
			EstadioIIIA: {
				label: 'Estadio IIIA',
				validation: [
					{ tumor: 'T3', nodule: 'N0', metastasis: 'M0' },
					{ tumor: 'T4', nodule: 'N0', metastasis: 'M0' },
					{ tumor: 'T1', nodule: 'N1', metastasis: 'M0' },
					{ tumor: 'T2', nodule: 'N1', metastasis: 'M0' },
					{ tumor: 'T3', nodule: 'N1', metastasis: 'M0' },
					{ tumor: 'T4', nodule: 'N1', metastasis: 'M0' },
				],
			},
			EstadioIIIB: {
				label: 'Estadio IIIB',
				validation: [
					{ tumor: 'T1', nodule: 'N2', metastasis: 'M0' },
					{ tumor: 'T2', nodule: 'N2', metastasis: 'M0' },
					{ tumor: 'T3', nodule: 'N2', metastasis: 'M0' },
					{ tumor: 'T4', nodule: 'N2', metastasis: 'M0' },
					{ tumor: 'T1', nodule: 'N3', metastasis: 'M0' },
					{ tumor: 'T2', nodule: 'N3', metastasis: 'M0' },
					{ tumor: 'T3', nodule: 'N3', metastasis: 'M0' },
				],
			},
			EstadioIVA: {
				label: 'Estadio IVA',
				validation: [{ tumor: 'T4', nodule: 'ANYN', metastasis: 'M0' }],
			},
			EstadioIVB: {
				label: 'Estadio IVB',
				validation: [{ tumor: 'ANYT', nodule: 'ANYN', metastasis: 'M1' }],
			},
		},
	},
	Pancreas: {
		tumor: {
			TX: 'TX',
			T0: 'T0',
			T1: 'T1',
			T2: 'T2',
			T3: 'T3',
			T4: 'T4',
		},
		nodule: {
			NX: 'Nx',
			N0: 'N0',
			N1: 'N1',
			N2: 'N2',
		},
		metastasis: {
			M0: 'M0',
			M1: 'M1',
		},
		cancerStage: {
			Estadio0: {
				label: 'Estadio 0',
				validation: [{ tumor: 'Tis', nodule: 'N0', metastasis: 'M0' }],
			},
			EstadioIA: {
				label: 'Estadio IA',
				validation: [{ tumor: 'T1', nodule: 'N0', metastasis: 'M0' }],
			},
			EstadioIB: {
				label: 'Estadio IB',
				validation: [{ tumor: 'T2', nodule: 'N0', metastasis: 'M0' }],
			},
			EstadioIIA: {
				label: 'Estadio IIA',
				validation: [{ tumor: 'T3', nodule: 'N0', metastasis: 'M0' }],
			},
			EstadioIIB: {
				label: 'Estadio IIB',
				validation: [
					{ tumor: 'T1', nodule: 'N1', metastasis: 'M0' },
					{ tumor: 'T2', nodule: 'N1', metastasis: 'M0' },
					{ tumor: 'T3', nodule: 'N1', metastasis: 'M0' },
				],
			},
			EstadioIII: {
				label: 'Estadio III',
				validation: [
					{ tumor: 'T1', nodule: 'N2', metastasis: 'M0' },
					{ tumor: 'T2', nodule: 'N2', metastasis: 'M0' },
					{ tumor: 'T3', nodule: 'N2', metastasis: 'M0' },
					{ tumor: 'T4', nodule: 'ANYN', metastasis: 'M0' },
				],
			},
			EstadioIV: {
				label: 'Estadio IV',
				validation: [{ tumor: 'ANYT', nodule: 'ANYN', metastasis: 'M1' }],
			},
		},
	},
	Riñon: {
		tumor: {
			TX: 'TX',
			T0: 'T0',
			T1: 'T1',
			T2: 'T2',
			T3: 'T3',
			T4: 'T4',
		},
		nodule: {
			NX: 'Nx',
			N0: 'N0',
			N1: 'N1',
		},
		metastasis: {
			M0: 'M0',
			M1: 'M1',
		},
		cancerStage: {
			EstadioI: {
				label: 'Estadio I',
				validation: [{ tumor: 'T1', nodule: 'N0', metastasis: 'M0' }],
			},
			EstadioII: {
				label: 'Estadio II',
				validation: [{ tumor: 'T2', nodule: 'N0', metastasis: 'M0' }],
			},
			EstadioIII: {
				label: 'Estadio III',
				validation: [
					{ tumor: 'T1', nodule: 'N1', metastasis: 'M0' },
					{ tumor: 'T2', nodule: 'N1', metastasis: 'M0' },
					{ tumor: 'T3', nodule: 'N0', metastasis: 'M0' },
					{ tumor: 'T3', nodule: 'N1', metastasis: 'M0' },
				],
			},
			EstadioIV: {
				label: 'Estadio IV',
				validation: [
					{ tumor: 'T4', nodule: 'ANYN', metastasis: 'M0' },
					{ tumor: 'ANYT', nodule: 'ANYN', metastasis: 'M1' },
				],
			},
		},
	},
};
