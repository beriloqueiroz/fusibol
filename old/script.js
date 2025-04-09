document.addEventListener('DOMContentLoaded', () => {
  const field = document.querySelector('.field');
  const teamA = document.getElementById('teamA');
  const teamB = document.getElementById('teamB');

  const nameTeamA = document.getElementById('nameTeamA');
  const nameTeamB = document.getElementById('nameTeamB');

  const formationSelectA = document.getElementById('formationA');
  const teamColorInputA = document.getElementById('teamColorA');
  const hideTeamCheckboxA = document.getElementById('hideTeamA');

  const formationSelectB = document.getElementById('formationB');
  const teamColorInputB = document.getElementById('teamColorB');
  const hideTeamCheckboxB = document.getElementById('hideTeamB');

  const resetButtons = document.querySelectorAll('.resetButton');
  const saveButtons = document.querySelectorAll('.saveButton');

  const formations = {
    '4-4-2': [
      { player: undefined, id: 1, x: 5, y: 50 }, // Goleiro
      { player: undefined, id: 2, x: 10, y: 30 }, // Zagueiro esquerdo
      { player: undefined, id: 3, x: 10, y: 70 }, // Zagueiro direito
      { player: undefined, id: 4, x: 15, y: 10 }, // Lateral esquerdo
      { player: undefined, id: 5, x: 15, y: 90 }, // Lateral direito
      { player: undefined, id: 6, x: 25, y: 40 }, // Volante esquerdo
      { player: undefined, id: 7, x: 25, y: 60 }, // Volante direito
      { player: undefined, id: 8, x: 35, y: 20 }, // Ala esquerdo
      { player: undefined, id: 9, x: 35, y: 80 }, // Ala direito
      { player: undefined, id: 10, x: 45, y: 40 }, // Centroavante esquerdo
      { player: undefined, id: 11, x: 45, y: 60 }  // Centroavante direito
    ],
    '4-3-3': [
      { player: undefined, id: 1, x: 5, y: 50 }, // Goleiro
      { player: undefined, id: 2, x: 10, y: 30 }, // Zagueiro esquerdo
      { player: undefined, id: 3, x: 10, y: 70 }, // Zagueiro direito
      { player: undefined, id: 4, x: 15, y: 10 }, // Lateral esquerdo
      { player: undefined, id: 5, x: 15, y: 90 }, // Lateral direito
      { player: undefined, id: 6, x: 25, y: 50 }, // Volante
      { player: undefined, id: 7, x: 35, y: 30 }, // Meia esquerdo
      { player: undefined, id: 8, x: 35, y: 70 }, // Meia direito
      { player: undefined, id: 9, x: 45, y: 50 }, // Centroavante
      { player: undefined, id: 10, x: 45, y: 20 }, // Ponta esquerda
      { player: undefined, id: 11, x: 45, y: 80 }  // Ponta direita
    ],
    '3-5-2': [
      { player: undefined, id: 1, x: 5, y: 50 }, // Goleiro
      { player: undefined, id: 2, x: 12, y: 30 }, // Zagueiro esquerdo
      { player: undefined, id: 3, x: 12, y: 50 }, // Zagueiro central
      { player: undefined, id: 4, x: 12, y: 70 }, // Zagueiro direito
      { player: undefined, id: 5, x: 30, y: 10 }, // Lateral esquerdo
      { player: undefined, id: 6, x: 30, y: 90 }, // Lateral direito
      { player: undefined, id: 7, x: 25, y: 35 }, // Volante esquerdo
      { player: undefined, id: 8, x: 25, y: 65 }, // Volante direito
      { player: undefined, id: 9, x: 35, y: 50 }, // Meia
      { player: undefined, id: 10, x: 45, y: 40 }, // Centroavante esquerdo
      { player: undefined, id: 11, x: 45, y: 60 }  // Centroavante direito
    ],
    '5-3-2': [
      { player: undefined, id: 1, x: 5, y: 50 },   // Goleiro
      { player: undefined, id: 2, x: 12, y: 30 },  // Zagueiro esquerdo
      { player: undefined, id: 3, x: 12, y: 50 },  // Zagueiro central
      { player: undefined, id: 4, x: 12, y: 70 },  // Zagueiro direito
      { player: undefined, id: 5, x: 15, y: 10 },  // Lateral esquerdo
      { player: undefined, id: 6, x: 15, y: 90 },  // Lateral direito
      { player: undefined, id: 7, x: 30, y: 40 },  // Volante
      { player: undefined, id: 8, x: 30, y: 60 },  // Meia central
      { player: undefined, id: 9, x: 40, y: 50 },  // Meia ofensivo
      { player: undefined, id: 10, x: 45, y: 30 },  // Atacante esquerdo
      { player: undefined, id: 11, x: 45, y: 70 }   // Atacante direito
    ],
    '4-5-1': [
      { player: undefined, id: 1, x: 5, y: 50 },
      { player: undefined, id: 2, x: 10, y: 30 },
      { player: undefined, id: 3, x: 10, y: 70 },
      { player: undefined, id: 4, x: 15, y: 10 },
      { player: undefined, id: 5, x: 15, y: 90 },
      { player: undefined, id: 6, x: 25, y: 20 },
      { player: undefined, id: 7, x: 25, y: 80 },
      { player: undefined, id: 8, x: 30, y: 40 },
      { player: undefined, id: 9, x: 30, y: 60 },
      { player: undefined, id: 10, x: 35, y: 50 },
      { player: undefined, id: 11, x: 45, y: 50 }  // Único atacante
    ],
    '4-2-4': [
      { player: undefined, id: 1, x: 5, y: 50 },
      { player: undefined, id: 2, x: 10, y: 30 },
      { player: undefined, id: 3, x: 10, y: 70 },
      { player: undefined, id: 4, x: 15, y: 10 },
      { player: undefined, id: 5, x: 15, y: 90 },
      { player: undefined, id: 6, x: 25, y: 40 },
      { player: undefined, id: 7, x: 25, y: 60 },
      { player: undefined, id: 8, x: 40, y: 20 },
      { player: undefined, id: 9, x: 40, y: 80 },
      { player: undefined, id: 10, x: 40, y: 40 },
      { player: undefined, id: 11, x: 40, y: 60 }
    ],
    '3-4-3': [
      { player: undefined, id: 1, x: 5, y: 50 },
      { player: undefined, id: 2, x: 12, y: 30 },
      { player: undefined, id: 3, x: 12, y: 50 },
      { player: undefined, id: 4, x: 12, y: 70 },
      { player: undefined, id: 5, x: 25, y: 20 },
      { player: undefined, id: 6, x: 25, y: 80 },
      { player: undefined, id: 7, x: 30, y: 40 },
      { player: undefined, id: 8, x: 30, y: 60 },
      { player: undefined, id: 9, x: 45, y: 20 },
      { player: undefined, id: 10, x: 45, y: 80 },
      { player: undefined, id: 11, x: 45, y: 50 }
    ],
    '4-2-3-1': [
      { player: undefined, id: 1, x: 5, y: 50 },
      { player: undefined, id: 2, x: 10, y: 30 },
      { player: undefined, id: 3, x: 10, y: 70 },
      { player: undefined, id: 4, x: 15, y: 10 },
      { player: undefined, id: 5, x: 15, y: 90 },
      { player: undefined, id: 6, x: 25, y: 40 },
      { player: undefined, id: 7, x: 25, y: 60 },
      { player: undefined, id: 8, x: 35, y: 50 },  // CAM
      { player: undefined, id: 9, x: 40, y: 30 },  // Ponta esquerda
      { player: undefined, id: 10, x: 40, y: 70 },  // Ponta direita
      { player: undefined, id: 11, x: 45, y: 50 }   // Centroavante
    ],
    '4-1-4-1': [
      { player: undefined, id: 1, x: 5, y: 50 },
      { player: undefined, id: 2, x: 10, y: 30 },
      { player: undefined, id: 3, x: 10, y: 70 },
      { player: undefined, id: 4, x: 15, y: 10 },
      { player: undefined, id: 5, x: 15, y: 90 },
      { player: undefined, id: 6, x: 25, y: 50 },  // Volante
      { player: undefined, id: 7, x: 35, y: 20 },
      { player: undefined, id: 8, x: 35, y: 80 },
      { player: undefined, id: 9, x: 35, y: 40 },
      { player: undefined, id: 10, x: 35, y: 60 },
      { player: undefined, id: 11, x: 45, y: 50 }
    ]
  };

  const positionAdjustment = 4; // depende do tamanho do objeto do jogador
  const positionAdjustmentMirror = 7;

  function mirrorPositions(positions) {
    return positions.map(pos => ({
      x: 96 - pos.x + positionAdjustmentMirror, // Espelha a posição x
      y: pos.y        // Mantém a posição y
    }));
  }

  // Variáveis globais para o modal e o jogador selecionado
  const modal = document.getElementById('playerModal');
  const playerNameInput = document.getElementById('playerName');
  const playerNumberInput = document.getElementById('playerNumber');
  const savePlayerDataButton = document.getElementById('savePlayerData');
  const closeModalButton = document.querySelector('.close');
  let selectedPlayer = null;

  // Função para abrir o modal
  function openModal(player) {
    selectedPlayer = player;
    const name = player.getAttribute('data-name') || '';
    const number = player.querySelector('input').value || '';
    playerNameInput.value = name;
    playerNumberInput.value = number;
    modal.style.display = 'flex';
  }

  // Função para fechar o modal
  function closeModal() {
    modal.style.display = 'none';
    selectedPlayer = null;
  }

  // Evento para salvar os dados do jogador
  savePlayerDataButton.addEventListener('click', () => {
    if (selectedPlayer) {
      const name = playerNameInput.value;
      const number = playerNumberInput.value;
      const id = selectedPlayer.id;
      // Atualiza o nome e o número do jogador
      selectedPlayer.setAttribute('data-name', name);
      selectedPlayer.querySelector('input').value = number;
      selectedPlayer.querySelector('label').innerHTML = name;
      let playersStr = localStorage.getItem("temp-player");

      if (playersStr == '' || playersStr == null) {
        playersStr = '[]';
      }

      let players = JSON.parse(playersStr);
      players = players.filter(p => p.id != selectedPlayer.id);
      players.push({
        id,
        name,
        number
      })

      localStorage.setItem("temp-player", JSON.stringify(players));

      closeModal();
    }
  });

  // Evento para fechar o modal ao clicar no botão de fechar
  closeModalButton.addEventListener('click', closeModal);

  // Evento para fechar o modal ao clicar fora dele
  window.addEventListener('click', (e) => {
    if (e.target === modal) {
      closeModal();
    }
  });

  // Modifique a função createPlayer para abrir o modal ao clicar no jogador
  function createPlayer(id, x, y, team, color, name, number) {
    const player = document.createElement('div');
    player.className = 'player';
    player.id = team.id + "-" + id;
    player.style.left = `${x}%`;
    player.style.top = `${y}%`;
    player.style.backgroundColor = color;

    const numberInput = document.createElement('input');
    numberInput.type = 'text';
    numberInput.maxLength = 2;
    numberInput.placeholder = '';
    numberInput.value = number || '';
    player.appendChild(numberInput);

    const nameInput = document.createElement('label');
    nameInput.type = 'text';
    nameInput.maxLength = 50;
    nameInput.innerHTML = name || '';

    nameInput.classList.add("player-name")
    player.appendChild(nameInput);

    player.addEventListener('mousedown', (e) => {
      e.preventDefault();
      const mouseDownX = e.clientX;
      const mouseDownY = e.clientY;
      const mouseDownTime = Date.now();

      const offsetX = e.clientX - player.getBoundingClientRect().left + field.offsetLeft;
      const offsetY = e.clientY - player.getBoundingClientRect().top + field.offsetTop;

      function movePlayer(e) {
        let newX = (e.clientX - offsetX) / field.offsetWidth * 100;
        let newY = (e.clientY - offsetY) / field.offsetHeight * 100;

        // Limita a posição do jogador dentro do campo
        newX = Math.max(0, Math.min(newX, 100)); // Limita entre 0% e 100%
        newY = Math.max(0, Math.min(newY, 100)); // Limita entre 0% e 100%

        player.style.left = `${newX}%`;
        player.style.top = `${newY}%`;
      }

      function stopMove(e) {
        document.removeEventListener('mousemove', movePlayer);
        document.removeEventListener('mouseup', stopMove);

        // Verifica se foi um clique ou arrasto
        const mouseUpX = e.clientX;
        const mouseUpY = e.clientY;
        const mouseUpTime = Date.now();

        const distance = Math.sqrt(
          Math.pow(mouseUpX - mouseDownX, 2) + Math.pow(mouseUpY - mouseDownY, 2)
        );
        const timeElapsed = mouseUpTime - mouseDownTime;

        // Se a distância for pequena e o tempo for curto, considera como clique
        if (distance < 5 && timeElapsed < 200) {
          openModal(player);
        }
      }

      document.addEventListener('mousemove', movePlayer);
      document.addEventListener('mouseup', stopMove);
    });
    team.appendChild(player);
  }

  function resetPlayers(team) {
    while (team.firstChild) {
      team.removeChild(team.firstChild);
    }
  }

  function loadFormation(formation, team, color, isTeamB = false) {
    resetPlayers(team);
    let positions = formations[formation];
    if (isTeamB) {
      positions = mirrorPositions(positions); // Espelha as posições para o Time B
    }
    let storagePlayers = localStorage.getItem('temp-player');
    if (storagePlayers == null || storagePlayers == '') {
      storagePlayers = '[]'
    }
    const tempPlayers = JSON.parse(storagePlayers);
    positions.forEach(pos => {

      const player = tempPlayers.find(t => t.id == `${team.id}-${pos.id}`)
      createPlayer(pos.id, pos.x - positionAdjustment, pos.y - positionAdjustment, team, color, player?.name, player?.number)
    });
  }

  // Event listeners para o Time A
  formationSelectA.addEventListener('change', () => {
    loadFormation(formationSelectA.value, teamA, teamColorInputA.value);
  });

  teamColorInputA.addEventListener('change', () => {
    Array.from(teamA.children).forEach(player => {
      player.style.backgroundColor = teamColorInputA.value;
    });
  });

  hideTeamCheckboxA.addEventListener('change', () => {
    teamA.style.display = hideTeamCheckboxA.checked ? 'none' : 'block';
  });

  // Event listeners para o Time B
  formationSelectB.addEventListener('change', () => {
    loadFormation(formationSelectB.value, teamB, teamColorInputB.value, true); // Time B espelhado
  });

  teamColorInputB.addEventListener('change', () => {
    Array.from(teamB.children).forEach(player => {
      player.style.backgroundColor = teamColorInputB.value;
    });
  });

  hideTeamCheckboxB.addEventListener('change', () => {
    teamB.style.display = hideTeamCheckboxB.checked ? 'none' : 'block';
  });

  // Resetar times
  resetButtons.forEach(button => {
    button.addEventListener('click', () => {
      const team = button.dataset.team === 'A' ? teamA : teamB;
      const formationSelect = button.dataset.team === 'A' ? formationSelectA : formationSelectB;
      const teamColorInput = button.dataset.team === 'A' ? teamColorInputA : teamColorInputB;

      const teamList = button.dataset.team === 'A' ? document.getElementById('teamListA') : document.getElementById('teamListB');
      teamList.innerHTML = ''; // Remove o select

      resetPlayers(team);
      formationSelect.value = '4-4-2';
      teamColorInput.value = button.dataset.team === 'A' ? '#00000' : '#0011DD';
      let key = button.dataset.team === 'A' ? nameTeamA?.value : nameTeamB?.value;
      if (key == null || key == '') {
        key = button.dataset.team
      } else {
        key = key.toLowerCase()
      }
      localStorage.removeItem(`${key}`);
      localStorage.removeItem(`temp-player`)
      loadFormation(formationSelect.value, team, teamColorInput.value, button.dataset.team === 'B');
    });
  });

  // Salvar times
  saveButtons.forEach(button => {
    button.addEventListener('click', () => {
      const team = button.dataset.team === 'A' ? teamA : teamB;
      const formation = button.dataset.team === 'A' ? formationSelectA : formationSelectB
      const playersData = Array.from(team.children).map(player => ({
        x: parseFloat(player.style.left),
        y: parseFloat(player.style.top),
        number: player.querySelector('input').value,
        name: player.getAttribute('data-name') || '',
        color: player.style.backgroundColor,
        side: button.dataset.team,
        formation: formation.value
      }));
      let key = button.dataset.team === 'A' ? nameTeamA?.value : nameTeamB?.value;
      if (key == null || key == '') {
        key = button.dataset.team
      } else {
        key = key.toLowerCase()
      }
      localStorage.setItem(`${key}`, JSON.stringify(playersData));
    });
  });

  // Carregar dados salvos
  function loadSavedData(team, key, isTeamB = false) {
    const savedData = localStorage.getItem(key);
    if (savedData) {
      const playersData = JSON.parse(savedData);
      playersData.forEach(player => {
        createPlayer(player.id, player.x, player.y, team, player.color, player.name, player.number);
      });
      const formationSelect = !isTeamB ? formationSelectA : formationSelectB;
      const teamColorInput = !isTeamB ? teamColorInputA : teamColorInputB;
      formationSelect.value = playersData[0].formation;
      teamColorInput.value = rgbToHex(playersData[0].color);
      return
    }
    // Inicializar formações
    if (isTeamB) {
      loadFormation(formationSelectB.value, teamB, teamColorInputB.value, true); // Time B espelhado
      return;
    }
    loadFormation(formationSelectA.value, teamA, teamColorInputA.value);

  }

  let keyA = nameTeamA?.value != null && nameTeamA?.value != '' ? nameTeamA?.value.toLowerCase() : 'teamAData';
  let keyB = nameTeamB?.value != null && nameTeamB?.value != '' ? nameTeamB?.value.toLowerCase() : 'teamBData';

  loadSavedData(teamA, keyA);
  loadSavedData(teamB, keyB, true); // Time B espelhado


  // Função para buscar times no localStorage
  function searchTeams(input, teamListId, team, isTeamB = false) {
    const searchText = input.value.toLowerCase();
    const teamList = document.getElementById(teamListId);

    // Limpa o select anterior
    teamList.innerHTML = '';

    if (searchText.length > 0) {
      const matches = [];
      for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        if (key.toLowerCase().startsWith(searchText)) {
          matches.push(key);
        }
      }

      if (matches.length > 0) {
        const select = document.createElement('select');
        select.innerHTML = '<option value="">Selecione um time</option>';
        select.id = 'select' + isTeamB ? 'B' : 'A'
        matches.forEach(match => {
          const option = document.createElement('option');
          option.value = match;
          option.textContent = match.replace('team', '').replace('Data', '');
          select.appendChild(option);
        });

        select.addEventListener('change', () => {
          if (select.value) {
            resetPlayers(team)
            loadSavedData(team, select.value, isTeamB);
            if (isTeamB) {
              nameTeamB.innerHTML = select.value
              return;
            }
            nameTeamA.value = select.value
          }
        });

        teamList.appendChild(select);
      } else {
        teamList.innerHTML = '<p>Nenhum time encontrado.</p>';
      }
    }
  }

  // Adiciona event listeners para os inputs de nome do time
  nameTeamA.addEventListener('input', () => {
    searchTeams(nameTeamA, 'teamListA', teamA);
  });

  nameTeamB.addEventListener('input', () => {
    searchTeams(nameTeamB, 'teamListB', teamB, true);
  });
});

function rgbToHex(rgbString) {
  // Extrai os valores R, G e B da string RGB
  const regex = /rgb\((\d+),\s*(\d+),\s*(\d+)\)/;
  const matches = rgbString.match(regex);

  if (!matches) {
    throw new Error('Formato RGB inválido');
  }

  // Converte cada valor para hexadecimal
  const r = parseInt(matches[1]).toString(16).padStart(2, '0');
  const g = parseInt(matches[2]).toString(16).padStart(2, '0');
  const b = parseInt(matches[3]).toString(16).padStart(2, '0');

  // Retorna o valor hexadecimal
  return `#${r}${g}${b}`;
}