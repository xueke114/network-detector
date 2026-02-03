import * as vscode from 'vscode';
import * as childProcess from 'child_process';

class NetworkDetector {
    private statusBarItem: vscode.StatusBarItem;
    private interval: NodeJS.Timeout | undefined;
    private isOnline: boolean = false;

    constructor() {
        this.statusBarItem = vscode.window.createStatusBarItem(vscode.StatusBarAlignment.Right, 100);
        this.statusBarItem.show();
        this.startMonitoring();
    }

    private startMonitoring() {
        this.checkNetworkStatus();
        this.interval = setInterval(() => {
            this.checkNetworkStatus();
        }, this.getCheckInterval());
    }

    private getTargetAddress(): string {
        return vscode.workspace.getConfiguration('networkDetector').get('targetAddress', 'www.baidu.com');
    }

    private getCheckInterval(): number {
        return vscode.workspace.getConfiguration('networkDetector').get('checkInterval', 5000);
    }

    private getStatusIcon(): string {
        return vscode.workspace.getConfiguration('networkDetector').get('statusIcon', '⬤');
    }

    private checkNetworkStatus() {
        const target = this.getTargetAddress();
        const command = process.platform === 'win32' ? `ping -n 1 ${target}` : `ping -c 1 ${target}`;

        childProcess.exec(command, (error, stdout, stderr) => {
            const newStatus = !error;
            if (newStatus !== this.isOnline) {
                this.isOnline = newStatus;
                this.updateStatusBar();
            }
        });
    }

    private updateStatusBar() {
        const icon = this.getStatusIcon();
        if (this.isOnline) {
            this.statusBarItem.text = icon;
            this.statusBarItem.color = '#4CAF50';
            this.statusBarItem.tooltip = vscode.l10n.t('status.internet.connected');
        } else {
            this.statusBarItem.text = icon;
            this.statusBarItem.color = '#FFC107';
            this.statusBarItem.tooltip = vscode.l10n.t('status.internet.disconnected');
        }
    }

    public dispose() {
        if (this.interval) {
            clearInterval(this.interval);
        }
        this.statusBarItem.dispose();
    }
}

export function activate(context: vscode.ExtensionContext) {
    let networkDetector: NetworkDetector = new NetworkDetector();
    context.subscriptions.push(networkDetector);

    vscode.workspace.onDidChangeConfiguration((event) => {
        if (event.affectsConfiguration('networkDetector')) {
            // 清理旧实例
            networkDetector.dispose();
            // 从订阅中移除旧实例
            const index = context.subscriptions.findIndex(sub => sub === networkDetector);
            if (index !== -1) {
                context.subscriptions.splice(index, 1);
            }
            // 创建新实例
            networkDetector = new NetworkDetector();
            context.subscriptions.push(networkDetector);
        }
    });
}

export function deactivate() {}
