import layout from "../layouts/main";
import { formatDuration } from "../utilities/dates/duration";

interface Props {
  timeSubmissions: {
    startedAt: string;
    durationSeconds: number;
  }[];
}

const root = ({ timeSubmissions }: Props) => {
  return (
    <main>
      <h1>Timesheet</h1>
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Start</th>
            <th>Duration</th>
          </tr>
        </thead>
        <tbody>
          {timeSubmissions.map((timeSub) => {
            const start = new Date(timeSub.startedAt);

            return (
              <tr key={timeSub.startedAt}>
                <td>{start.toLocaleDateString()}</td>
                <td>{start.toLocaleTimeString()}</td>
                <td>{formatDuration(timeSub.durationSeconds)}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <div>
        <span>
          Total time spent:{" "}
          {formatDuration(
            timeSubmissions.reduce((acc, sub) => {
              return acc + sub.durationSeconds;
            }, 0)
          )}
        </span>
      </div>
      <div>
        <a href="/timecard/new">Clock in</a>
      </div>
    </main>
  );
};

export default {
  component: root,
  layout: layout,
};
