
document.addEventListener('DOMContentLoaded', () => {
    const mobileMenuToggle = document.getElementById('mobileMenuToggle');
    const navMenu = document.querySelector('.nav-menu');

    if (mobileMenuToggle) {
        mobileMenuToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            mobileMenuToggle.classList.toggle('active');
        });
    }
});

class TaskManager {
    constructor() {
        this.tasks = this.loadTasks();
        this.currentFilter = 'all';
        this.init();
    }

    init() {
        this.cacheDOMElements();
        this.attachEventListeners();
        this.render();
    }

    cacheDOMElements() {
        this.taskInput = document.getElementById('taskInput');
        this.addBtn = document.getElementById('addBtn');
        this.taskList = document.getElementById('taskList');
        this.emptyState = document.getElementById('emptyState');
        this.totalTasksEl = document.getElementById('totalTasks');
        this.completedTasksEl = document.getElementById('completedTasks');
        this.pendingTasksEl = document.getElementById('pendingTasks');
        this.filterBtns = document.querySelectorAll('.filter-btn');
    }

    attachEventListeners() {
        
        this.addBtn.addEventListener('click', () => this.addTask());
        
        
        this.taskInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') this.addTask();
        });

    
        this.filterBtns.forEach(btn => {
            btn.addEventListener('click', (e) => {
                this.setFilter(e.target.dataset.filter);
            });
        });
    }

    loadTasks() {
        const savedTasks = localStorage.getItem('tasks');
        return savedTasks ? JSON.parse(savedTasks) : [];
    }

    saveTasks() {
        localStorage.setItem('tasks', JSON.stringify(this.tasks));
    }

    addTask() {
        const taskText = this.taskInput.value.trim();
        
        if (taskText === '') {
            this.taskInput.focus();
            return;
        }

        const task = {
            id: Date.now(),
            text: taskText,
            completed: false,
            createdAt: new Date().toISOString()
        };

        this.tasks.unshift(task);
        this.saveTasks();
        this.taskInput.value = '';
        this.render();
        this.taskInput.focus();
    }

    deleteTask(id) {
        this.tasks = this.tasks.filter(task => task.id !== id);
        this.saveTasks();
        this.render();
    }

    toggleTask(id) {
        const task = this.tasks.find(task => task.id === id);
        if (task) {
            task.completed = !task.completed;
            this.saveTasks();
            this.render();
        }
    }

    setFilter(filter) {
        this.currentFilter = filter;
        
        
        this.filterBtns.forEach(btn => {
            btn.classList.toggle('active', btn.dataset.filter === filter);
        });
        
        this.render();
    }

    getFilteredTasks() {
        switch (this.currentFilter) {
            case 'completed':
                return this.tasks.filter(task => task.completed);
            case 'pending':
                return this.tasks.filter(task => !task.completed);
            default:
                return this.tasks;
        }
    }

    updateStats() {
        const total = this.tasks.length;
        const completed = this.tasks.filter(task => task.completed).length;
        const pending = total - completed;

        this.totalTasksEl.textContent = total;
        this.completedTasksEl.textContent = completed;
        this.pendingTasksEl.textContent = pending;
    }

    render() {
        const filteredTasks = this.getFilteredTasks();
        
        
        this.updateStats();

        
        this.taskList.innerHTML = '';

        
        if (filteredTasks.length === 0) {
            this.emptyState.classList.add('show');
            return;
        } else {
            this.emptyState.classList.remove('show');
        }

        
        filteredTasks.forEach(task => {
            const taskItem = this.createTaskElement(task);
            this.taskList.appendChild(taskItem);
        });
    }

    createTaskElement(task) {
        const li = document.createElement('li');
        li.className = `task-item ${task.completed ? 'completed' : ''}`;
        li.dataset.id = task.id;

        li.innerHTML = `
            <div class="task-checkbox" data-action="toggle"></div>
            <span class="task-text">${this.escapeHtml(task.text)}</span>
            <button class="btn-delete" data-action="delete">Delete</button>
        `;

        
        li.addEventListener('click', (e) => {
            const action = e.target.dataset.action;
            
            if (action === 'toggle') {
                this.toggleTask(task.id);
            } else if (action === 'delete') {
                this.deleteTask(task.id);
            }
        });

        return li;
    }

    escapeHtml(text) {
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    }
}


document.addEventListener('DOMContentLoaded', () => {
    new TaskManager();
});
