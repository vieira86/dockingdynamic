// Demo mode - sem backend
export const DEMO_MODE = true;

export const DEMO_RESPONSES = {
  uploadPDB: {
    ligands: [],
    main_ligand: null,
    active_site_coords: { x: 10.5, y: 15.2, z: 8.7 },
    pdb_content: "DEMO_PDB_CONTENT"
  },
  fetchPDB: (pdbId) => ({
    ligands: [],
    main_ligand: null,
    active_site_coords: { x: 10.5, y: 15.2, z: 8.7 },
    pdb_content: "DEMO_PDB_CONTENT"
  }),
  dock: {
    binding_affinity: -7.5,
    poses_path: "/demo/poses.pdbqt",
    complex_path: "/demo/complex.pdbqt",
    download_urls: {
      all_poses: "/demo/download/all_poses.pdbqt"
    }
  }
};
