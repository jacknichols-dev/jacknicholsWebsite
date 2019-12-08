import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material';
export interface INotification {
  message: string;
  type: 'warn' | 'error' | 'success';
}

@Injectable({
  providedIn: 'root'
})
export class NotifyService {
  notificationsQueue: INotification[] = [];
  constructor(private snack: MatSnackBar) {}

  public success(message: string) {
    this.queue({ type: 'success', message });
  }

  public error(error: Error | string) {
    if (typeof error === 'string') {
      this.queue({ type: 'error', message: error });
    } else {
      this.queue({ type: 'error', message: '🌋 ' + error.message });
    }
  }

  public warn(message: string) {
    this.queue({ type: 'warn', message });
  }

  // this is how we add a notification to the que
  private queue(notification: INotification) {
    this.notificationsQueue.push(notification);
    // we trigger the notify function manually if it won't be triggered by the afterDismissed
    if (!this.snack._openedSnackBarRef) {
      this.notify();
    }
  }

  private notify(): void {
    // getting then ext notification in que
    const note = this.getNextNotification();

    // if we don't have one, we just return
    if (!note) {
      return;
    }

    // opening the actual snackbar
    this.snack
      .open(note.message, undefined, {
        duration: 2500,
        panelClass: note.type,
        horizontalPosition: 'end'
      })
      .afterDismissed()
      .subscribe(() => {
        // processing the next message in the que
        this.notify();
      });
  }

  // managing the array of notifications
  private getNextNotification(): INotification | undefined {
    return this.notificationsQueue.length
      ? this.notificationsQueue.shift()
      : undefined;
  }
}
