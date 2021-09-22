var execShPromise = require("exec-sh").promise;

const projects = [
  { name: "202110_S1_E1_Patrociname_Front" },
  { name: "202110_S1_E2_English4People_Front" },
  { name: "202110_S1_E3_Discomovil_Front" },
  { name: "202110_S1_E4_Kindergarten_Front" },
  { name: "202110_S2_E1_Podcast_Front" },
  { name: "202110_S2_E2_Treeking_Front" },
  { name: "202110_S2_E3_Cassettes_Front" },
  { name: "202110_S2_E4_DogSpa_Front" },
  { name: "202110_S4_E1_Serviplus_Front" },
  { name: "202110_S4_E2_Recetas_Front" },
  { name: "202110_S4_E3_Detalles_Front" },
  { name: "202110_S4_E4_ComputadoresPorPartes_Front" },
];

const run = async () => {
  let out;

  try {
    for (const project of projects) {
      let command = `sed -i "s/67fc884.*/692cb316-0794-4522-9cf0-83c2618a09e5'/g" Jenkinsfile &&
        sed -i "s/2021.*/${project.name}\\/reports\\/)/g" README.md  &&
        git remote rm origin &&
        git remote add origin git@github.com:Uniandes-isis2603/${project.name}.git &&
        git add Jenkinsfile README.md &&
        git commit -m "Add sonar properties" &&
        git push origin master`;

      //let command = `sed -i "s/2021.*/${project.name}\\/reports\\/)/g" README.md  &&
      //  git remote rm origin  &&
      //  git remote add origin git@github.com:Uniandes-isis2603/${project.name}.git  &&
      //  git add README.md &&
      //  git commit -m "Add sonar properties" &&
      //  git push origin master`;

      //let command = `sed -i "s/GIT_REPO\\s=.*/GIT_REPO = '${project.name}'/g" Jenkinsfile &&
      //  git remote rm origin &&
      //  git remote add origin git@github.com:Uniandes-isis2603/${project.name}.git &&
      //  git add Jenkinsfile &&
      //  git commit -m "Add sonar properties" &&
      //  git push origin master`;

      // let command = `sed -i 's/projectKey=.*/projectKey=${project.name}:sonar/g' sonar-project.properties &&
      //  sed -i 's/projectName=.*/projectName=${project.name}/g' sonar-project.properties &&
      //  git remote rm origin &&
      //  git remote add origin git@github.com:Uniandes-isis2603/${project.name}.git &&
      //  git add sonar-project.properties &&
      //  git commit -m "Add sonar properties" &&
      //  git push origin master`;
      out = await execShPromise(command, true);
    }
  } catch (e) {
    console.log("Error: ", e);
    console.log("Stderr: ", e.stderr);
    console.log("Stdout: ", e.stdout);
    return e;
  }

  console.log("out: ", out.stdout, out.stderr);
};

run();
