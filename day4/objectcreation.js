const skills = [
{ name: "HTML", proficiency: "Intermediate" },
{ name: "CSS", proficiency: "Advanced" },
{ name: "JavaScript", proficiency: "Beginner" },
];
function formatSkills(skillsArray) {
  return skillsArray.map(skill => `${skill.name} (${skill.proficiency})`);
}
const formattedSkills = formatSkills(skills);
formattedSkills.forEach(skill => console.log(skill));
