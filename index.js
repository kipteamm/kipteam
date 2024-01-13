const moreProjects = document.getElementById('more-projects');

function toggleProjects(button) {
    moreProjects.classList.toggle('h-full');

    if (button.innerText === 'More') {
        button.innerText = 'Less';
    } else {
        button.innerText = 'More';
    }
}

let currentStage = 1;

function setStage(button, stage) {
    document.getElementById(`stage-${currentStage}`).classList.remove('flex');
    document.getElementById(`stage-${currentStage}`).classList.add('hidden');
    document.getElementById(`stage-${stage}`).classList.remove('hidden');
    document.getElementById(`stage-${stage}`).classList.add('flex');

    currentStage = stage;

    document.querySelector('.active-stage').classList.remove('active-stage');

    button.querySelector('div').classList.add('active-stage')
}

const samples = document.getElementById('samples');
let samplesShown = false

function toggleSamples() {
    if (samplesShown) {
        samples.classList.remove('h-auto')

        samplesShown = false

        return
    }

    samples.classList.add('h-auto')

    samplesShown = true
}

function submit() {
    description = document.getElementById('description').value;
    firstName = document.getElementById('first-name').value;
    lastName = document.getElementById('last-name').value;
    email = document.getElementById('email').value;
    additional = document.getElementById('additional').value;
}