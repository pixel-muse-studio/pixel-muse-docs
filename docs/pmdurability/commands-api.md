# Commands and API

## Administrator commands

Item commands target the PMdurability item in the main hand.

| Command | Purpose | Permission |
|---|---|---|
| `/pmdurability inspect` | Show ID, durability, tint, and UUID | `pmdurability.inspect` |
| `/pmdurability damage <value>` | Decrease durability | `pmdurability.admin` |
| `/pmdurability repair <value>` | Restore durability | `pmdurability.admin` |
| `/pmdurability repair full` | Fully repair | `pmdurability.admin` |
| `/pmdurability set <value>` | Set current durability | `pmdurability.admin` |
| `/pmdurability reload` | Reload and synchronize | `pmdurability.reload` |

Alias: `/pmdura`

```text
/pmdurability damage 10
/pmdurability repair full
/pmdurability set 1
```

## PlaceholderAPI

Placeholders read the main-hand item and return an empty string when it is not managed.

```text
%pmdurability_id%
%pmdurability_current%
%pmdurability_max%
%pmdurability_percent%
%pmdurability_tint%
%pmdurability_uuid%
```

## Skript

New event syntax is registered after a full server restart.

```vb
on pm durability change:
    send "Changed item: %event-string%" to event-player

on pm durability break:
    cancel event

on pm durability tool use:
    # Fired once for every actual shift craft
```

## Java events

| Event | Timing |
|---|---|
| `PMDurabilityChangeEvent` | Before a durability change is applied |
| `PMDurabilityBreakEvent` | Immediately before the item breaks |
| `PMDurabilityToolUseEvent` | Once for every crafting-tool use |

```java
@EventHandler
public void onBreak(PMDurabilityBreakEvent event) {
    event.setCancelled(true); // Keep one durability
}
```
